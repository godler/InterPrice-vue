<script setup>
import parseDate from "@/utils/parseDate";
import { useStore } from "@/composable/useStore";
import { computed, ref, watch } from "vue";
import TableSubRow from "./TableSubRow.vue";
import _ from "lodash";

import parseQuotes from "../utils/parseQuotes";

const { selectedDisplay, currentCurrency, selectedYears } = useStore();

const props = defineProps({
  company: {
    type: Object,
    required: true,
  },
});

const isOpen = ref(false);

const dateString = computed(() => {
  if (!props.company.DateSent) return;
return parseDate(props.company.DateSent)
});

const quotes = computed(() => {
  return parseQuotes(
    props.company.Quote?.filter((item) => {
      return (
        item.Currency == currentCurrency.value &&
        selectedYears.value.includes(item.Years)
      );
    })
  );
});

const selectedDisplayQuote = computed(() => {
  return _.get(quotes.value, selectedDisplay.value) || {};
});

const otherQuetes = computed(() => {
  let copy = { ...quotes.value };
  delete copy?.[selectedDisplay.value];
  return copy;
});

watch(
  () => props.company,
  () => {
    isOpen.value = false;
  }
);
</script>

<template>
  <div class="">
    <TableSubRow
      :date="dateString"
      :company="company.Company"
      :quote="selectedDisplayQuote"
      @toggle="isOpen = !isOpen"
      :canToggle="true"
      :isOpen="isOpen"
    />
    <div v-if="isOpen">
      <TableSubRow
        v-for="(quote, key) in otherQuetes"
        :key="key"
        :company="key"
        :quote="quote"
      />
    </div>
  </div>
</template>
