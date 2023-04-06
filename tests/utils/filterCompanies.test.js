import { describe, it, expect, test } from "vitest";

import filterCompanies from "../../src/utils/filterCompanies";

import rawData from "../../src/api/data.json";

describe("Test filter companies function ", () => {
  it("throws TypeError", () => {
    function testThrowError() {
      filterCompanies("a", "b", "c");
    }
    expect(testThrowError).toThrowError(TypeError);
  });

  it("Filter by name", () => {
    expect(filterCompanies(rawData.Items, "condax")).length(1)
  });
});
