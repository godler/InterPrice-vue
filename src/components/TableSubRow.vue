<script setup>
import { useStore } from "@/composable/useStore";
import TableValueColumn from "./TableValueColumn.vue";
import { ChevronDown, ChevronUp } from "vue-icon-packs/ti";
const props = defineProps({
  date: {
    type: String,
    default: null,
  },
  company: {
    type: String,
    default: null,
  },
  quotes: {
    type: Array,
    required: true,
  },
  canToggle: {
    type: Boolean,
    default: false,
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["toggle"]);

const { selectedYears, selectedDisplay } = useStore();

const getValue = (year, CouponType) => {
  return props.quotes.find((quote) => {
    return quote.CouponType == CouponType && quote.Years === year;
  });
};
</script>

<template>
  <div
    class="columns is-gapless mb-1 mt-1"
    style="border-bottom: 1px solid #ccc"
    @click="$emit('toggle')"
  >
    <div class="column">
      <ChevronDown v-if="canToggle && !isOpen" />
      <ChevronUp v-if="canToggle && isOpen" />
      {{ date }}
    </div>
    <div class="column">
      {{ company }}
    </div>

    <div
      class="columns column is-gapless mb-1 mt-1"
      v-for="(year, keyYear) in selectedYears"
      :key="keyYear"
    >
      <TableValueColumn :quote="getValue(year, 'FIX')" :display="selectedDisplay"/>
      <TableValueColumn :quote="getValue(year, 'FRN')" :display="selectedDisplay"/>
    </div>
  </div>
</template>
