import parseQuotes from "./parseQuotes";
import isMinimumQuoteValue from "./isMinimumQuoteValue";
export default function parseData(companies) {
  companies = companies.map((item) => {
    let obj = {
      Id: item.Id,
      Company: item.Company,
      DateSent: item.DateSent,
      Preferred: item.Preferred,
    };

    if (item.Quote) {
      obj.Quote = parseQuotes(item.Quote)
        .flat()
        .filter((n) => n);
    }

    return obj;
  });

  companies = companies.map((company) => {
    return {
      ...company,
      Quote: company?.Quote?.map((item) => {
        return {
          ...item,
          isMinimum: isMinimumQuoteValue(
            item,
            companies
              .map((item) => item.Quote)
              .flat()
              .filter((n) => n)
          ),
        };
      }),
    };
  });

  return companies;
}
