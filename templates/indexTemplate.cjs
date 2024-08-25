const path = require("path");
const { kebabToPascalCase } = require("../utils/kebabToPascalCase.cjs");
const {
  iconPrefixFromFilePath,
} = require("../utils/iconPrefixFromFilePath.cjs");

const defaultIndexTemplate = (filePaths) => {
  const exportEntries = filePaths.map(({ path: filePath }) => {
    const baseName = path.basename(filePath, path.extname(filePath));
    const pascalCaseName = kebabToPascalCase(baseName);
    const prefix = iconPrefixFromFilePath(filePath);
    return `export { default as ${prefix}${pascalCaseName} } from './${baseName}'`;
  });
  return exportEntries.join("\n");
};

module.exports = defaultIndexTemplate;
