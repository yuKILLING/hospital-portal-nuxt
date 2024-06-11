<template>
  <div class="phone:w-4/6 m-auto">
    <UModal v-model="isOpen">
      <div class="p-4 flex flex-col justify-center items-center gap-4">
        <h1 class="text-xl font-bold">
          Вы уверены что хотите удалить учреждение?
        </h1>
        <div class="flex justify-center items-center gap-3">
          <ModulesMainButton class="w-16" @click="deleteHospital()"
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
      <h1 class="font-bold font-size mt-2">Подведомственные учреждения</h1>
      <ModulesMainButton
        @click="$router.push('/add-hospital')"
        v-show="token.length > 0"
      >
        Добавить
      </ModulesMainButton>
    </div>
    <HospitalList
      :hospitals="hospitals"
      @deleteHospital="middlewareDelete($event)"
    >
    </HospitalList>
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
  title: 'Учреждения Астраханской области',
  meta:[{
    name: 'description',
    content: 'Список учреждений Астраханской области'
  }]
})
const token = useToken();
const isOpen = ref(false);
const idToDelete = ref("");
const searchQuery = ref("");
const {
  hospitals,
  totalPages,
  currentPage,
  allHospitals,
  loadHospitals,
  isPaginationHidden,
} = useHospitals();
const { deleteRequest } = useDeleteHospital();
const { sortingArray } = useSearchHospital();

const fetchPage = (page) => {
  isPaginationHidden.value = false;
  searchQuery.value = "";
  currentPage.value = page;
  loadHospitals();
};

const middlewareDelete = (id) => {
  idToDelete.value = id;
  isOpen.value = true;
};
const deleteHospital = async () => {
  deleteRequest(idToDelete.value);
  await loadHospitals();
  if (hospitals.value.length === 0) {
    currentPage.value--;
  }
  loadHospitals();
  isOpen.value = false;
};

const searchHandler = () => {
  if (searchQuery.value.length > 0) {
    hospitals.value = sortingArray(allHospitals, searchQuery);
    isPaginationHidden.value = true;
  } else {
    fetchPage(1)
  }
};
</script>

<style scoped>
.font-size {
  font-size: clamp(25px, 5vw, 35px);
}
</style>
