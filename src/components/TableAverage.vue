<script setup>
import { computed } from "vue";
import { useStore } from "@/composable/useStore";
import parseSpreadValue from "@/utils/parseSpreadValue";
const { selectedYears, selectedDisplay, companies, currentCurrency } =
  useStore();

const quotes = computed(() => {
  if (companies.value) {
    return [...companies.value].map((item) => item.Quote).flat();
  }

  return [];
});

const average = (year, couponType) => {
  let q = quotes.value
    .filter((quote) => {
      return (
        quote.type === selectedDisplay.value &&
        quote.CouponType == couponType &&
        quote.Years === year &&
        quote.Currency === currentCurrency.value
      );
    })
    .map((i) => i.value).filter(n => n);

    console.log( q);

  let average = q.reduce((a, b) => a + b, 0) / q.length;
  if (!average) return;

  if (selectedDisplay.value === "Spread" || selectedDisplay.value === '3MLSpread') {
    return parseSpreadValue(average.toFixed());
  }
  if (selectedDisplay.value === "Yield") {
    return parseFloat(average).toFixed(3) + "%";
  }

  return average;
};
</script>

<template>
  <div
    class="columns mt-1 is-gapless py-2 is-size-7"
    style="border: 1px solid #000"
  >
    <div class="column m-0"></div>
    <div class="column m-0">Average by {{ selectedDisplay }}</div>
    <div
      class="column columns m-0 is-gapless has-text-centered"
      v-for="(year, key) in selectedYears"
      :key="year"
    >
      <div class="column m-0">{{ average(year, "FIX") }}</div>
      <div class="column m-0">{{ average(year, "FRN") }}</div>
    </div>
  </div>
</template>
