import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const svgFolders = ["line", "solid", "thinline", "monochrome"];

function runCommand(command) {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Command failed: ${command}`);
    process.exit(1);
  }
}

function processSvgs() {
  svgFolders.forEach(folder => {
    console.log(`Processing '${folder}' style icons...`);
    const command = `
      pnpm svgr \
      --index-template=templates/indexTemplate.cjs \
      --template=templates/iconTemplate.cjs \
      --svg-props="height={size},width={size},fill={color}" \
      --ref \
      --typescript \
      --filename-case kebab \
      --out-dir generated/${folder} \
      -- node_modules/@iconscout/unicons/svg/${folder}
    `;
    runCommand(command);
    console.log(`Generated folder for '${folder}' style icons`);
  });
}

function replaceClassnamesInMonochrome() {
  console.log("Replacing classNames in 'monochrome' style icons...");

  const monochromeDir = path.join("generated", "monochrome");

  // Check if the directory exists before trying to read it
  if (!fs.existsSync(monochromeDir)) {
    console.warn(`Directory '${monochromeDir}' does not exist. Skipping className replacements.`);
    return;
  }

  const files = fs.readdirSync(monochromeDir);

  files.forEach(filename => {
    if (filename.endsWith(".tsx")) {
      const filepath = path.join(monochromeDir, filename);
      let content = fs.readFileSync(filepath, 'utf-8');

      // Delete existing opacity={...} props
      content = content.replace(/opacity={.*}/g, '');

      // Replace classNames with corresponding opacity props
      content = content.replace(/className="uim-primary"/g, 'opacity={1}');
      content = content.replace(/className="uim-secondary"/g, 'opacity={0.7}');
      content = content.replace(/className="uim-tertiary"/g, 'opacity={0.5}');
      content = content.replace(/className="uim-quaternary"/g, 'opacity={0.25}');

      fs.writeFileSync(filepath, content, 'utf-8');
    }
  });

  console.log("Finished replacing classNames in 'monochrome' style icons");
}

function generateUniconProps() {
  const uniconPropsContent = `
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
  `;

  const uniconPropsPath = path.join("generated", "UniconProps.ts");
  fs.writeFileSync(uniconPropsPath, uniconPropsContent.trim(), 'utf-8');
  console.log("Generated UniconProps.ts");
}

function main() {
  if (!fs.existsSync("generated")) {
    fs.mkdirSync("generated");
  }
  processSvgs();
  replaceClassnamesInMonochrome();
  generateUniconProps();
}

main();
