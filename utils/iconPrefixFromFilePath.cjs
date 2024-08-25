const iconPrefixFromFilePath = (filePath) => {
  const iconStyle = filePath.split("/")[filePath.split("/").length - 2];
  switch (iconStyle) {
    case "solid":
      return "Uis";
    case "monochrome":
      return "Uim";
    case "thinline":
      return "Uit";
    case "line":
    default:
      return "Uil";
  }
};

module.exports = { iconPrefixFromFilePath };
