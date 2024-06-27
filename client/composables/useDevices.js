import { useToast } from "@/components/ui/toast/use-toast";
export const useDevices = () => {
  const runtime = useRuntimeConfig();
  const currentPage = ref(1);
  const route = useRoute();
  const { toast } = useToast();

  const fetchDevices = () => {
    try {
      const { pending, data, refresh } = useLazyFetch(
        () =>
          `db/getdevicebyhospitalid?page=${currentPage.value}&id=${route.params.id}`,
        {
          baseURL: runtime.public.apiBase,
        }
      );
      return { pending, data, refresh };
    } catch (error) {
      console.error(error);
      toast({
        description: "Что-то пошло не так...",
        variant: "destructive"
      });
    }
  };
  
  const { pending, data, refresh } = fetchDevices();

  const handlePageChange = (newPage) => {
    currentPage.value = newPage;
  };

  watch(currentPage, () => {
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
