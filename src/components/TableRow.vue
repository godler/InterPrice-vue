<script setup>
import parseDate from "@/utils/parseDate";
import { useStore } from "@/composable/useStore";
import { computed, ref, watch } from "vue";
import TableSubRow from "./TableSubRow.vue";
import _ from "lodash";


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
  return parseDate(props.company.DateSent);
});

const selectedDisplayQuote = computed(() => {
  return props.company.Quote?.filter((item) => {
    return (
      item.type === selectedDisplay.value &&
      item.Currency == currentCurrency.value &&
      selectedYears.value.includes(item.Years)
    );
  });
});

const otherQuetes = computed(() => {
  return _.groupBy(
    props.company.Quote?.filter((item) => {
      return (
        item.type !== selectedDisplay.value &&
        item.Currency === currentCurrency.value &&
        selectedYears.value.includes(item.Years)
      );
    }),
    'type'
  );
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
      :quotes="selectedDisplayQuote"
      @toggle="isOpen = !isOpen"
      :canToggle="true"
      :isOpen="isOpen"
    />
    <div v-if="isOpen">
      <TableSubRow
        v-for="(quotes, key) in otherQuetes"
        :key="key"
        :company="key"
        :quotes="quotes"
      />
    </div>
  </div>
</template>
