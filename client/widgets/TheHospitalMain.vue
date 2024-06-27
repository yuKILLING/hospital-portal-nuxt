<template>
  <div class="sm:w-4/6 w-full sm:m-auto m-1 flex flex-col">
    <!-- Input -->
    <MainInput
      class="ml-auto"
      v-model="searchQuery"
      @searchRequest="
        navigateTo(`/results/?hospital_name=${searchQuery}`)
      "
    />

    <!-- Title -->
    <div class="flex justify-between items-center">
      <h1 class="mr-auto font-bold font-change mt-5 mb-10">
        Подведомственные учреждения
      </h1>
      <MainButton v-if="token.length > 0" @click="navigateTo('/add-hospital')">
        Добавить
      </MainButton>
    </div>

    <!-- Hospitals List -->
    <HospitalList
      :hospitals="data.hospitals"
      :pending="pending"
      @deleteHospital="deleteHospital($event)"
    />

    <!-- Pagination -->
    <PagePagination
      :total="data.total"
      :currentPage="currentPage"
      @pageChange="handlePageChange"
      class="m-auto"
    />
  </div>
</template>

<script setup>
const token = useToken();
const searchQuery = ref("");
const { currentPage, pending, data, refresh, handlePageChange } =
  useHospitals();
const { deleteRequest } = useDeleteHospital();

// Functions
const deleteHospital = async (id) => {
  await deleteRequest(id);
  console.log(data.value.hospitals.length);
  if (data.value.hospitals.length === 1) {
    currentPage.value--;
  }
  await refresh();
};

</script>

<style scoped>
.font-change {
  font-size: clamp(25px, 5vw, 35px);
}
</style>
