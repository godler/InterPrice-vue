import _ from "lodash";

export default function filterCompanies(companies, sortBy, searchQuery) {
    companies =_.orderBy(companies, sortBy.name, sortBy.order);

  if (searchQuery !== "") {
    companies = companies.filter((o) =>
      o.Company.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return companies;
}
