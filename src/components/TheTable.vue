<script setup>
import { useStore } from "../composable/useStore";
import { ChevronDown, ChevronUp } from "vue-icon-packs/ti";

const { setSorting, sortBy, selectedYears } = useStore();
</script>

<template>
  <div class="is-fullwidth ">
    <div class="mb-0 has-text-weight-bold"  style="border-bottom: 2px solid #ccc;">
      <div class="columns  is-gapless mb-0">
        <div class="column "></div>
        <div class="column "></div>

        <div
          class="column has-text-centered"
          v-for="(year, key) in selectedYears"
          :key="key"
        >
          {{ year }} YRS
        </div>
      </div>
      <div class="columns is-gapless mb-0">
        <div class="column">
          <a @click="setSorting('DateSent')">
            DATE SENT
            <ChevronDown
              v-if="sortBy.name == 'DateSent' && sortBy.order == 'asc'"
            />
            <ChevronUp
              v-if="sortBy.name == 'DateSent' && sortBy.order == 'desc'"
            />
          </a>
        </div>
        <div class="column">
          <a @click="setSorting('Company')">
            COMPANY
            <ChevronDown
              v-if="sortBy.name == 'Company' && sortBy.order == 'asc'"
            />
            <ChevronUp
              v-if="sortBy.name == 'Company' && sortBy.order == 'desc'"
            />
          </a>
        </div>
        <div
          class="columns column is-gapless mb-1"
          v-for="(year, key) in selectedYears"
          :key="key"
        >
          <div class="column has-text-centered">FIX</div>
          <div class="column has-text-centered">FRN</div>
        </div>
      </div>
    </div>
    
    <div>
      <slot></slot>
    </div>
 
  </div>
</template>
