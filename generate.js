import fs from "fs";
import path from "path";
import { execSync } from "child_process";

function processSvgs() {
  for (const folder of ["line", "solid", "thinline", "monochrome"]) {
    console.log(`Processing '${folder}' style icons...`);

    // Ensure the output directory exists
    const outputDir = path.join("generated", folder);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const command =
      "pnpm svgr " +
      "--index-template=templates/indexTemplate.cjs " +
      "--template=templates/iconTemplate.cjs " +
      '--svg-props="height={size},width={size},fill={color}" ' +
      "--ref " +
      "--typescript " +
      "--filename-case kebab " +
      `--out-dir ${outputDir} ` +
      `node_modules/@iconscout/unicons/svg/${folder}`;

    try {
      execSync(command, { stdio: "inherit" });
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
    console.log(`Generated folder for '${folder}' style icons`);
  }
}

function replaceClassnamesInMonochrome() {
  console.log("Replacing classNames in 'monochrome' style icons...");

  const monochromeDir = path.join("generated", "monochrome");

  // Check if the directory exists before trying to read it
  if (!fs.existsSync(monochromeDir)) {
    console.error(
      `Directory '${monochromeDir}' does not exist. Skipping className replacements.`,
    );
    process.exit(1);
  }

  const files = fs.readdirSync(monochromeDir);

  // files.forEach((filename) => {
  for (const filename of files) {
    if (filename.endsWith(".tsx")) {
      const filepath = path.join(monochromeDir, filename);
      let content = fs.readFileSync(filepath, "utf-8");

      // Delete existing opacity={...} props
      content = content.replace(/opacity={.*}/g, "");

      // Replace classNames with corresponding opacity props
      content = content.replace(/className="uim-primary"/g, "opacity={1}");
      content = content.replace(/className="uim-secondary"/g, "opacity={0.7}");
      content = content.replace(/className="uim-tertiary"/g, "opacity={0.5}");
      content = content.replace(
        /className="uim-quaternary"/g,
        "opacity={0.25}",
      );

      fs.writeFileSync(filepath, content, "utf-8");
    }
  }

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
  fs.writeFileSync(uniconPropsPath, uniconPropsContent.trim(), "utf-8");
  console.log("Generated UniconProps.ts");
}

function main() {
  const generatedDir = "generated";
  if (!fs.existsSync(generatedDir)) {
    fs.mkdirSync(generatedDir, { recursive: true });
  }

  processSvgs();
  replaceClassnamesInMonochrome();
  generateUniconProps();
}

main();
