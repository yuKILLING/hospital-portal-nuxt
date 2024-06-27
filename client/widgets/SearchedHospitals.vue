<template>
  <div class="sm:w-4/6 w-full sm:m-auto m-1 flex flex-col">
    <!-- Input -->
    <MainInput
      class="ml-auto"
      v-model="searchQuery"
      @searchRequest="navigateTo(`/results/?hospital_name=${searchQuery}`)"
    />

    <!-- Title -->
    <h1 class="mr-auto font-bold font-change mt-5 mb-10">Результаты поиска</h1>

    <!-- Searched Device List -->
    <HospitalList
      v-if="data && data.hospitals"
      :hospitals="data.hospitals"
      :pending="pending"
    />
    <!-- Pagination -->
    <PagePagination
      v-if="data && data.total !== undefined"
      :total="data.total"
      :currentPage="currentPage"
      @pageChange="handlePageChange"
      class="m-auto"
    />
  </div>
</template>

<script setup>
const { currentPage, pending, data, refresh, handlePageChange } =
  useSearchedHospitals();
const searchQuery = ref("");
</script>

<style scoped>
.font-change {
  font-size: clamp(25px, 5vw, 35px);
}
</style>
