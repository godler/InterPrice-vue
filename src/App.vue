<script setup>
import { onMounted } from "vue";
import TableFilters from "./components/TableFilters.vue";
import { useStore } from "./composable/useStore";
import Table from "./components/TheTable.vue";
import TableRow from "./components/TableRow.vue";
import TableEmptyRow from "./components/TableEmptyRow.vue";
import TableAverage from './components/TableAverage.vue'

const { getData, companies, noQuoteCompanies } = useStore();


onMounted(async () => {
  await getData();
 
});
</script>

<template>
  <div id="app" class="container p-6">

     <TableFilters />

    <Table>
      <TableRow
        v-for="(company, key) in companies"
        :key="key"
        :company="company"
      />
      <TableEmptyRow
        v-for="(company, key2) in noQuoteCompanies"
        :key="company+key2"
        :company="company"
      />
      <TableAverage/>
    </Table>


  </div>
</template>

<style scoped></style>
