import { ref, readonly, computed } from "vue";
import { getData as getApiData } from "@/api/api";
import pluckCurrencies from "@/utils/pluckCurrencies";
import filterCompanies from "@/utils/filterCompanies";
import pluckYears from "../utils/pluckYears";

const data = ref();
const currentCurrency = ref("USD");
const sortBy = ref({
  name: "DateSent",
  order: "asc",
});
const searchQuery = ref("");
const currencies = ref([]);
const selectedYears = ref([]);

const displays = ref(['Spread', 'Yield', '3MLSpread']);

const selectedDisplay = ref('Spread');

const getData = async () => {
  data.value = await getApiData();
  currencies.value = pluckCurrencies(data.value?.Items);
  selectedYears.value = [...years.value];
};

const setCurrentCurrency = (currency) => {
  currentCurrency.value = currency;
  selectedYears.value = [...years.value];
};

const companies = computed(() => {
  if (!data.value) return;

  return filterCompanies(data.value.Items.filter((i)=>i.Quote), sortBy.value, searchQuery.value);
});

const noQuoteCompanies = computed(() => {
  if (!data.value) return;

  return filterCompanies(data.value.Items.filter((i)=>!i.Quote), sortBy.value, searchQuery.value);
});

const years = computed(() => {
  return pluckYears(data.value?.Items, currentCurrency.value);
});

const setSorting = (valueName) => {
  if (valueName == sortBy.value.name) {
    sortBy.value.order = sortBy.value.order == "asc" ? "desc" : "asc";
  } else {
    sortBy.value = {
      name: valueName,
      order: "asc",
    };
  }
};

const setSelectedYear = (year) => {
  const index = selectedYears.value.indexOf(year);
  if (index > -1) {
    selectedYears.value.splice(index, 1);
  }else{
    selectedYears.value.push(year);
  }
};

const setDisplay = (displays)=>{
  selectedDisplay.value = displays;
}

export function useStore() {
  return {
    companies,
    noQuoteCompanies,
    currencies,
    currentCurrency: readonly(currentCurrency),
    sortBy: readonly(sortBy),
    searchQuery,
    years,
    displays: readonly(displays),
    selectedDisplay: readonly(selectedDisplay),
    selectedYears: readonly(selectedYears),
    setSelectedYear,
    setDisplay,
    getData,
    setCurrentCurrency,
    setSorting,
  };
}
