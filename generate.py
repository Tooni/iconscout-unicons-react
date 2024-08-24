import os
import json
import re
from pathlib import Path

# Function to convert a word to PascalCase
def to_pascal_case(input_str):
    output = ''
    # Convert the input to lowercase and replace hyphens/underscores with spaces
    input_str = re.sub(r'[-_]', ' ', input_str)

    # Iterate over each word in the input
    for word in input_str.split():
        # Capitalize the first letter of the word and add it to the output
        output += word.capitalize()

    # Return the PascalCase string
    return output

# Function to convert SVG content to valid JSX
def svg_to_jsx(svg_content):
    # Replace `class` with `className`
    svg_content = re.sub(r'\bclass\b=', 'className=', svg_content)
    return svg_content

def process_icons(json_file_name):
    base_name = Path(json_file_name).stem
    output_dir = Path(os.getcwd()) / 'generated' / base_name
    output_dir.mkdir(parents=True, exist_ok=True)

    icon_props_name = 'UniconProps'
    icon_props_path = output_dir / f'{icon_props_name}.ts'
    icons_index_path = output_dir / f'{base_name}.ts'
    icons_component_path = output_dir / 'icons'
    icons_component_path.mkdir(parents=True, exist_ok=True)

    index_ts = [f"export * from './{icon_props_name}';"]
    used_names = set()  # Initialize as an empty set

    with open(f'node_modules/@iconscout/unicons/json/{json_file_name}.json', 'r', encoding='utf-8') as f:
        config = json.load(f)

    print(f"Processing '{json_file_name}' style icons...")

    for icon in config:
        name = icon['name']
        base_name = f'unicon-{name}'
        pascal_case_name = to_pascal_case(base_name)
        lower_case_name = pascal_case_name.lower()

        # Check for unique names and handle duplicates by appending counter number
        if lower_case_name in used_names:
            counter = 2
            while lower_case_name in used_names:
                pascal_case_name = f'{to_pascal_case(base_name)}{counter}'
                lower_case_name = pascal_case_name.lower()
                counter += 1

        used_names.add(lower_case_name)

        location = icons_component_path / f'{pascal_case_name}.tsx'
        svg_path = icon['svg']

        with open(f'node_modules/@iconscout/unicons/{svg_path}', 'r', encoding='utf-8') as svg_file:
            svg_content = svg_file.read()

        # Convert SVG content to valid JSX by replacing `class` with `className`
        svg_content = svg_to_jsx(svg_content)

        # Extract the SVG tag with its attributes and the content within the SVG tag
        svg_tag_match = re.search(r'<svg([^>]*)>(.*?)</svg>', svg_content, re.DOTALL)
        if not svg_tag_match:
            print(f"Could not find SVG content in {svg_path}")
            continue

        svg_attributes = svg_tag_match.group(1).strip()
        svg_inner_content = svg_tag_match.group(2).strip()

        # Generate the React component
        template = f"""
import React from 'react';
import {{ {icon_props_name} }} from '../{icon_props_name}';

export const {pascal_case_name} = ({{ size=24, color='currentColor', ...others }}: {icon_props_name}) => (
  <svg {svg_attributes} width={{size}} height={{size}} fill={{color}} {{...others}}>
    {svg_inner_content}
  </svg>
);
"""

        with open(location, 'w', encoding='utf-8') as component_file:
            component_file.write(template.strip())

        index_ts.append(f"export * from './icons/{pascal_case_name}';")

    with open(icons_index_path, 'w', encoding='utf-8') as index_file:
        index_file.write('\n'.join(index_ts))

    print(f"Created index file: {icons_index_path}")

    icon_props_template = f"""
import {{ SVGProps }} from 'react';
export interface {icon_props_name} extends SVGProps<SVGSVGElement> {{
  /**
    * The color of the icon.
    * @default 'currentColor'
    */
  color?: string;
  /**
    * The size of the icon, can be a string or a number.
    * @default 24
    */
  size?: string | number;
}}
"""

    with open(icon_props_path, 'w', encoding='utf-8') as props_file:
        props_file.write(icon_props_template.strip())

    print(f"Created TypeScript declaration file: {icon_props_path}")

if __name__ == "__main__":
    json_files = ["line", "monochrome", "solid", "thinline"]
    for json_file_name in json_files:
        process_icons(f"{json_file_name}")
