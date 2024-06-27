import { useToast } from "@/components/ui/toast/use-toast";
export const useHospitals = () => {
  const runtime = useRuntimeConfig();
  const currentPage = ref(1);
  const { toast } = useToast();

  const fetchHospitals = () => {
    try {
      const { pending, data, refresh } = useLazyFetch(
        () => `db/gethospitals?page=${currentPage.value}`,
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

  const { pending, data, refresh } = fetchHospitals(); 

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
