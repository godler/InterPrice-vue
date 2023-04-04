<script setup>
import { useStore } from "@/composable/useStore";
import { Bold, ChevronDown, ChevronUp } from "vue-icon-packs/ti";
defineProps({
  date: {
    type: String,
    default: null,
  },
  company: {
    type: String,
    default: null,
  },
  quote: {
    type: Object,
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

const { selectedYears } = useStore();
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
      <div
        class="column has-text-centered is-size-7"
        :class="{
          'has-background-warning-light':
            quote.Years?.['Year' + year]?.FIX?.isMinimum,
        }"
      >
        {{
          quote?.Years?.["Year" + year]
            ? quote.Years?.["Year" + year]?.FIX?.value
            : ""
        }}
      </div>
      <div class="column has-text-centered is-size-7">
        {{
          quote?.Years?.["Year" + year]
            ? quote.Years?.["Year" + year]?.FRN?.value
            : ""
        }}
      </div>
    </div>
  </div>
</template>
