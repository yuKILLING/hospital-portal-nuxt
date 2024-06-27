import { useToast } from "@/components/ui/toast/use-toast";
export const useSearchedHospitals = () => {
  const runtime = useRuntimeConfig();
  const route = useRoute(); 
  const currentPage = ref(1);
  const { toast } = useToast();

  const fetchHospitals = () => {
    const { pending, data, refresh } = useLazyFetch(
      () => `db/gethospitals?page=${currentPage.value}&hospital_name=${route.query.hospital_name || ''}`,
      {
        baseURL: runtime.public.apiBase,
      }
    );
    return { pending, data, refresh };
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
