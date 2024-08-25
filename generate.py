import os
import subprocess
import sys
import re

svg_folders = ["line", "solid", "thinline", "monochrome"]

def run_command(command):
    """Utility function to run a shell command."""
    result = subprocess.run(command, shell=True, check=True)
    if result.returncode != 0:
        print(f"Command failed: {command}", file=sys.stderr)
        sys.exit(result.returncode)

def process_svgs():
    """Process SVG folders using svgr and custom templates."""
    for folder in svg_folders:
        print(f"Processing '{folder}' style icons...")
        command = (
            f"pnpm svgr "
            f"--index-template=templates/indexTemplate.cjs "
            f"--template=templates/iconTemplate.cjs "
            f"--svg-props=\"height={{size}},width={{size}},fill={{color}}\" "
            f"--ref "
            f"--typescript "
            f"--filename-case kebab "
            f"--out-dir generated/{folder} "
            f"-- node_modules/@iconscout/unicons/svg/{folder}"
        )
        run_command(command)
        print(f"Generated folder for '{folder}' style icons")

def replace_classnames_in_monochrome():
    """Replace classNames with opacity props in monochrome style icons."""
    print("Replacing classNames in 'monochrome' style icons...")

    monochrome_dir = "generated/monochrome"
    for filename in os.listdir(monochrome_dir):
        if filename.endswith(".tsx"):
            filepath = os.path.join(monochrome_dir, filename)

            with open(filepath, "r") as file:
                content = file.read()

            # Delete existing opacity={...} props
            content = re.sub(r'opacity={.*}', '', content)

            # Replace classNames with corresponding opacity props
            content = re.sub(r'className="uim-primary"', 'opacity={1}', content)
            content = re.sub(r'className="uim-secondary"', 'opacity={0.7}', content)
            content = re.sub(r'className="uim-tertiary"', 'opacity={0.5}', content)
            content = re.sub(r'className="uim-quaternary"', 'opacity={0.25}', content)

            with open(filepath, "w") as file:
                file.write(content)

    print("Finished replacing classNames in 'monochrome' style icons")

def generate_unicon_props():
    """Generate UniconProps.ts file."""
    unicon_props_content = """
import type { SVGProps } from 'react';

export interface UniconProps extends SVGProps<SVGSVGElement> {
    /**
     * The size of the icon.
     * Passed down to the SVG's height and width attributes.
     * @default 24
     */
    size?: number | string;

    /**
     * The color of the icon.
     * @default 'currentColor'
     */
    color?: string;
}
"""
    unicon_props_path = "generated/UniconProps.ts"
    with open(unicon_props_path, "w") as file:
        file.write(unicon_props_content.strip())
    print("Generated UniconProps.ts")

def main():
    os.makedirs("generated", exist_ok=True)
    process_svgs()
    replace_classnames_in_monochrome()
    generate_unicon_props()

if __name__ == "__main__":
    main()
