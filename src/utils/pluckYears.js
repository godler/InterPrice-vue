import _ from "lodash";

export default function pluckYears(companies, currency) {
  const years = [];
  if (companies !== undefined && companies.length > 0) {
    companies.forEach((item) => {
      if (
        item.Quote !== null &&
        item.Quote !== undefined &&
        item.Quote.length > 0
      ) {
        item.Quote.forEach((item) => {
          item.Years && item.Currency === currency && years.push(item.Years);
        });
      }
    });
  }

  return _.uniq(
    years.sort((a, b) => {
      return a > b;
    })
  );
}
