import parseSpreadValue from "./parseSpreadValue";
import isMinimumQuoteValue from "./isMinimumQuoteValue";
import _ from "lodash";

export default function parseQuotes(rawQuotes) {
  let computedQuotes = {};

  if (rawQuotes) {
    for (let index = 0; index < rawQuotes.length; index++) {
      if (rawQuotes[index]?.Spread) {
        _.set(
          computedQuotes,
          `Spread.Years.Year${rawQuotes[index].Years}.${rawQuotes[index].CouponType}`,
          {
            value: parseSpreadValue(rawQuotes[index]?.Spread),
            isMinimum: isMinimumQuoteValue(
              rawQuotes[index]?.Spread,
              "Spread",
              rawQuotes[index].Years,
              rawQuotes[index].CouponType
            ),
          }
        );
      }
      if (rawQuotes[index]?.Yield) {
        _.set(
          computedQuotes,
          `Yield.Years.Year${rawQuotes[index].Years}.${rawQuotes[index].CouponType}`,
          { value: rawQuotes[index]?.Yield.toPrecision(4) + "%" }
        );
      }
      if (rawQuotes[index]?.["3MLSpread"]) {
        _.set(
          computedQuotes,
          `3MLSpread.Years.Year${rawQuotes[index]?.Years}.${rawQuotes[index]?.CouponType}`,
          { value: parseSpreadValue(rawQuotes[index]?.["3MLSpread"]) }
        );
      }
    }
  }

  return computedQuotes;
}
