import _ from "lodash";

export default function filterCompanies(companies, searchQuery) {
  if (
    companies === undefined ||
    companies === null ||
    !Array.isArray(companies)
  ) {
    throw new TypeError("Companies need to by array");
  }

  if (searchQuery !== "") {
    companies = companies.filter((o) =>
      o.Company.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return companies;
}
  