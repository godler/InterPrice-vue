<script setup>
import parseSpreadValue from "@/utils/parseSpreadValue";
import { computed } from "vue";
const props = defineProps({
  quote: {
    type: Object,
    default: () => {},
  },
  display: {
    type: String,
    required: true,
  },
});

const columnValue = computed(() => {
  if (props.quote?.value) {
    if (props.quote?.type === "Spread" || props.quote?.type === "3MLSpread") {
      return parseSpreadValue(props.quote.value);
    }

    if (props.quote?.type === "Yield") {
      return props.quote?.value.toFixed(3) + "%";
    }

    return props.quote?.value;
  }
});
</script>
<template>
  <div
    class="column has-text-centered is-size-7"
    :class="{
      'has-background-light': quote?.isMinimum && display == quote?.type,
    }"
  >
    {{ columnValue }}
  </div>
</template>
