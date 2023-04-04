<script setup>
import { useStore } from "../composable/useStore";

const {
  currencies,
  setCurrentCurrency,
  currentCurrency,
  searchQuery,
  years,
  selectedYears,
  setSelectedYear,
  displays,
  setDisplay,
  selectedDisplay
} = useStore();
</script>
<template>
  <div class="">
    <div class="columns">
      <div class="column">
        <div class="field has-addons">
          <p v-for="(currency, key) in currencies" class="control" :key="key">
            <button
              class="button"
              :class="{ 'is-primary': currentCurrency === currency }"
              @click="setCurrentCurrency(currency)"
            >
              <span>{{ currency }}</span>
            </button>
          </p>
        </div>
      </div>

      <div class="column">
        <div class="field has-addons">
          <p v-for="(year, key) in years" class="control" :key="key">
            <button
              class="button"
              :class="{ 'is-primary': selectedYears.includes(year) }"
              @click="  setSelectedYear(year)"
            >
              <span>{{ year }} YRS</span>
            </button>
          </p>
        </div>
      </div>

      <div class="column">
        <div class="field has-addons">
          <p v-for="(display, key) in displays" class="control" :key="key">
            <button
              class="button"
              :class="{ 'is-primary': selectedDisplay == display }"
              @click=" setDisplay(display)"
            >
              <span>{{ display }} </span>
            </button>
          </p>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-one-quarter">
        <input class="input" type="text" v-model="searchQuery" />
      </div>
    </div>
  </div>
</template>
