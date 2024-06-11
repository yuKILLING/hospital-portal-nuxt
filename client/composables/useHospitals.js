export function useHospitals() {
  const toast = useToast();
  const hospitals = ref([]);
  const allHospitals = ref([]);
  const limit = ref(10);
  const totalPages = ref(0);
  const currentPage = ref(1);
  const isPaginationHidden = ref(false);

  const {
    public: { apiBase },
  } = useRuntimeConfig();

  const loadHospitals = async () => {
    try {
      const allHospitalsData = await $fetch(`${apiBase}/db/getallhospitals`);
      const hospitalsData = await $fetch(`${apiBase}/db/gethospitals`, {
        params: { page: currentPage.value },
      });

      allHospitals.value = allHospitalsData || [];
      hospitals.value = hospitalsData || [];
      totalPages.value = Math.ceil(allHospitals.value.length / limit.value);
    } catch (error) {
      console.error(error);
      toast.add({ title: "Что-то пошло не так...", color: "red" });
    }
  };

  onMounted(loadHospitals);

  return {
    hospitals,
    totalPages,
    limit,
    currentPage,
    loadHospitals,
    allHospitals,
    isPaginationHidden,
  };
}
