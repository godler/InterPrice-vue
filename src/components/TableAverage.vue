<script setup>
import { useStore } from "@/composable/useStore";
const { selectedYears, selectedDisplay } = useStore();


</script>

<template>
  <div class="columns mt-1 is-gapless py-2" style="border: 1px solid #000">
    <div class="column m-0 "></div>
    <div class="column m-0 ">Average by {{ selectedDisplay }}</div>
    <div class="column columns m-0  is-gapless has-text-centered">
      <div class="column m-0 ">a</div>
      <div class="column m-0 ">a</div>
    </div>
    <div class="column columns m-0 is-gapless has-text-centered">
      <div class="column m-0 ">a</div>
      <div class="column m-0 ">a</div>
    </div>
    <div class="column columns m-0 is-gapless has-text-centered">
      <div class="column m-0 ">a</div>
      <div class="column m-0 ">a</div>
    </div>
  </div>
</template>
