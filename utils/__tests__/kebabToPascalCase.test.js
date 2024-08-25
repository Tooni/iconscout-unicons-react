import { expect } from "chai";
import { kebabToPascalCase } from "../kebabToPascalCase.cjs";

describe("kebabToPascalCase", () => {
  it('should convert "kebab-case-word" to "KebabCaseWord"', () => {
    expect(kebabToPascalCase("kebab-case-word")).to.equal("KebabCaseWord");
  });

  it('should convert "blah" to "Blah"', () => {
    expect(kebabToPascalCase("blah")).to.equal("Blah");
  });

  it("should not throw for an empty string", () => {
    expect(kebabToPascalCase("")).to.equal("");
  });

  it('should not change "AlreadyPascalCase"', () => {
    expect(kebabToPascalCase("AlreadyPascalCase")).to.equal(
      "AlreadyPascalCase",
    );
  });
});
