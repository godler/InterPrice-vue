<script setup>
import { useStore } from "@/composable/useStore";

const { selectedYears } = useStore();

defineProps({
  company: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="columns is-gapless mb-1 mt-1"
    style="border-bottom: 1px solid #ccc"
    @click="$emit('toggle')"
  >
    <div class="column"></div>
    <div class="column has-text-grey-light">
      {{ company.Company }}
    </div>

    <div
      class="columns column is-gapless mb-1 mt-1"
      v-for="(year, keyYear) in selectedYears"
      :key="keyYear"
    >
      <div class="column has-text-centered is-size-7"></div>
      <div class="column has-text-centered is-size-7"></div>
    </div>
  </div>
</template>
