const path = require('path')

function defaultIndexTemplate(filePaths) {
    const exportEntries = filePaths.map(({ path: filePath }) => {
        const baseName = path.basename(filePath, path.extname(filePath))
        const exportName = /^\d/.test(baseName) ? `Svg${baseName}` : baseName
        return `export { default as Uil${baseName} } from './${baseName}'`
    })
    return exportEntries.join('\n')
}

module.exports = defaultIndexTemplate
