import { useToast } from "@/components/ui/toast/use-toast";

export const useSearchedDevices = () => {
  const runtime = useRuntimeConfig();
  const currentPage = ref(1);
  const route = useRoute();
  const { toast } = useToast();

  const fetchDevices = () => {
    const { pending, data, refresh } = useLazyFetch(
      () =>
        `${runtime.public.apiBase}/db/getdevicebyhospitalid?page=${
          currentPage.value
        }&id=${route.params.id}&device_name=${route.query.device_name || ""}`
    );
    console.log(data.value)
    return { pending, data, refresh };
  };

  const { pending, data, refresh } = fetchDevices();

  const handlePageChange = (newPage) => {
    currentPage.value = newPage;
  };

  watch(currentPage, () => {
    // Call refresh whenever currentPage changes
    refresh();
  });

  return {
    currentPage,
    pending,
    data,
    refresh,
    handlePageChange,
  };
};
