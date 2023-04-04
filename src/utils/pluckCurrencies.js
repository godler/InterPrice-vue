import _ from "lodash";

export default function pluckCurrencies(data) {
  const currencies = [];
  if (data !== undefined && data.length > 0) {
    data.forEach((item) => {
      if (item.Quote !== null && item.Quote !== undefined && item.Quote.length > 0) {
        item.Quote.forEach((item) => {
          item.Currency && currencies.push(item.Currency);
        });
      }
    });
  }

  return _.uniq(currencies.sort());
}
