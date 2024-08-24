const path = require('path')

function fromKebabToPascalCase(str) {
    return str
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}

function defaultIndexTemplate(filePaths) {
    const exportEntries = filePaths.map(({ path: filePath }) => {
        const baseName = path.basename(filePath, path.extname(filePath));
        const pascalCaseName = fromKebabToPascalCase(baseName);
        return `export { default as Uil${pascalCaseName} } from './${baseName}'`;
    })
    return exportEntries.join('\n');
}

module.exports = defaultIndexTemplate
