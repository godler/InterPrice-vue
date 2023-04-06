import _ from "lodash";

export default function sortCompanies(companies, sortBy, order) {
  if (
    companies === undefined ||
    companies === null ||
    !Array.isArray(companies)
  ) {
    throw new TypeError("Companies need to by array");
  }

  companies = _.orderBy(companies, sortBy, order);



  return companies;
}
