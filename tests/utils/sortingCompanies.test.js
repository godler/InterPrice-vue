import { describe, it, expect } from "vitest";

import sortCompanies from "../../src/utils/sortCompanies";

import rawData from "../../src/api/data.json";

describe("Test sorting companies function ", () => {
  it("throws TypeError", () => {
    function testThrowError() {
      sortCompanies("a", "b", "c");
    }
    expect(testThrowError).toThrowError();
  });

  it("Sorts asc by name", () => {
    expect(sortCompanies(rawData.Items, "name", "asc"))
    
    .arrayContaining(
      expect.objectContaining({ Company: "Condax" })
    );
  });
});
