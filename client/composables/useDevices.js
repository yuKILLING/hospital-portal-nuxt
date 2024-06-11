export function useDevices() {
  const route = useRoute();
  const toast = useToast();
  const devices = ref([]);
  const typeOfReq = ref(0); // 0 - loading, 1 - loaded, 2 - error
  const sortedByRouteIdDevices = ref([]);
  const limit = ref(10);
  const totalPages = ref(0);
  const currentPage = ref(1);
  const isPaginationHidden = ref(false);

  const config = useRuntimeConfig();

  const loadDevices = async () => {
    try {
      typeOfReq.value = 0;

      // Загрузка всех устройств
      const allDevicesData = await $fetch(`${config.public.apiBase}/db/getalldevices`, {
        params: {
          id: route.params.id,
        },
      });
      devices.value = allDevicesData || [];
      totalPages.value = Math.ceil(devices.value.length / limit.value);

      // Загрузка устройств по ID больницы с пагинацией
      const sortedDevicesData = await $fetch(`${config.public.apiBase}/db/getdevicebyhospitalid`, {
        params: {
          id: route.params.id,
          page: currentPage.value,
          limit: limit.value,
        },
      });
      sortedByRouteIdDevices.value = sortedDevicesData || [];

      typeOfReq.value = 1;
    } catch (error) {
      console.error(error);
      typeOfReq.value = 2;
      toast.add({ title: "Что-то пошло не так...", color: "red" });
    }
  };

  onMounted(loadDevices);

  return {
    devices,
    sortedByRouteIdDevices,
    currentPage,
    totalPages,
    loadDevices,
    typeOfReq,
    isPaginationHidden,
  };
}