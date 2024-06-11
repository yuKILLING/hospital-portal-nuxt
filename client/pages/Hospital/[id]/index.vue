<template>
  <div class="phone:w-4/6 m-auto flex flex-col">
    <UModal v-model="isOpen">
      <div class="p-4 flex flex-col justify-center items-center gap-4">
        <h1 class="text-xl font-bold">
          Вы уверены что хотите удалить аппарат?
        </h1>
        <div class="flex justify-center items-center gap-3">
          <ModulesMainButton class="w-16" @click="deleteDevice()"
            >Да</ModulesMainButton
          >
          <ModulesMainButton class="w-16" @click="isOpen = false"
            >Нет</ModulesMainButton
          >
        </div>
      </div>
    </UModal>
    <ModulesMainInput @searchRequest="searchHandler" v-model="searchQuery">
    </ModulesMainInput>
    <div class="flex items-center justify-between mt-5">
      <h1 class="font-bold font-size mt-2">Аппаратура</h1>
      <ModulesMainButton
        @click="$router.push(`/hospital/${route.params.id}/add-device`)"
        v-show="token.length > 0"
      >
        Добавить
      </ModulesMainButton>
    </div>
    <DeviceList
      :devices="sortedByRouteIdDevices"
      :typeOfReq="typeOfReq"
      @deleteDevice="middlewareDelete($event)"
    >
    </DeviceList>
    <LayoutPagination
      :totalPages="totalPages"
      :currentPage="currentPage"
      :isPaginationHidden="isPaginationHidden"
      @fetchPage="fetchPage($event)"
      v-show="!isPaginationHidden"
    ></LayoutPagination>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});

useHead({
  title: "Список аппаратуры",
  meta: [
    {
      name: "description",
      content: "Список аппаратуры учреждения",
    },
  ],
});
const isOpen = ref(false);
const token = useToken();
const route = useRoute();
const idToDelete = ref("");
const searchQuery = ref("");
const {
  devices,
  sortedByRouteIdDevices,
  currentPage,
  totalPages,
  isPaginationHidden,
  loadDevices,
  typeOfReq,
} = useDevices();
const { deleteRequest } = useDeleteDevice();
const { sortingArray } = useSearchDevice();

const fetchPage = (page) => {
  isPaginationHidden.value = false;
  currentPage.value = page;
  loadDevices();
};

const middlewareDelete = (id) => {
  idToDelete.value = id;
  isOpen.value = true;
};

const deleteDevice = async () => {
  try {
    await deleteRequest(idToDelete.value);
    if (sortedByRouteIdDevices.value.length === 1 && currentPage.value > 1) {
      currentPage.value--;
    }
    await loadDevices();
    if (sortedByRouteIdDevices.value.length === 0 && currentPage.value > 1) {
      currentPage.value--;
      await loadDevices();
    }
    isOpen.value = false;
    console.log(sortedByRouteIdDevices.value);
  } catch (error) {
    console.error("Ошибка при удалении устройства:", error);
  }
};

const searchHandler = () => {
  if (searchQuery.value.length > 0) {
    sortedByRouteIdDevices.value = sortingArray(devices, searchQuery);
    isPaginationHidden.value = true;
  } else {
    fetchPage(1);
  }
};
</script>

<style scoped>
.font-size {
  font-size: clamp(25px, 5vw, 35px);
}
</style>
