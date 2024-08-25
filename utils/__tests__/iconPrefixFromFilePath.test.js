import { expect } from "chai";
import { iconPrefixFromFilePath } from "../iconPrefixFromFilePath.cjs";

describe("iconPrefixFromFilePath", () => {
  it('should return "Uis" for "solid" icon style', () => {
    expect(iconPrefixFromFilePath("path/to/solid/icon")).to.equal("Uis");
  });

  it('should return "Uim" for "monochrome" icon style', () => {
    expect(iconPrefixFromFilePath("path/to/monochrome/icon")).to.equal("Uim");
  });

  it('should return "Uit" for "thinline" icon style', () => {
    expect(iconPrefixFromFilePath("path/to/thinline/icon")).to.equal("Uit");
  });

  it('should return "Uil" for "line" icon style', () => {
    expect(iconPrefixFromFilePath("path/to/line/icon")).to.equal("Uil");
  });

  it('should return "Uil" for any other icon style', () => {
    expect(iconPrefixFromFilePath("path/to/other/icon")).to.equal("Uil");
  });
});
