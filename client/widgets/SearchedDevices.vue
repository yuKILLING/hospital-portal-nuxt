<template>
  <div class="sm:w-4/6 w-full sm:m-auto m-1 flex flex-col">
    <!-- Input -->
    <MainInput
      class="ml-auto"
      v-model="searchQuery"
      @searchRequest="navigateTo(`/hospital/${route.params.id}/results/?device_name=${searchQuery}`)"
    />

    <!-- Title -->
    <h1 class="mr-auto font-bold font-change mt-5 mb-10">Результаты поиска</h1>

    <!-- Searched Hospital List -->
    <DeviceList
      v-if="data && data.devices"
      :devices="data.devices"
      :pending="pending"
      @deleteDevice="deleteDevice($event)"
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
const searchQuery = ref("");
const route = useRoute();
const { currentPage, pending, data, refresh, handlePageChange } =
  useSearchedDevices();
  const { deleteRequest } = useDeleteDevice();

const deleteDevice = async (id) => {
  await deleteRequest(id);
  if (data.value.devices.length === 1) {
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
