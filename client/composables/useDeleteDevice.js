import { useToast } from "@/components/ui/toast/use-toast";
export default function useDeleteDevice() {
  const token = useToken();
  const { toast } = useToast();
  const {
    public: { apiBase },
  } = useRuntimeConfig();

  const deleteRequest = async (id) => {
    try {
      const response = await $fetch(`${apiBase}/db/deletedevice`, {
        method: "DELETE",
        params: {
          id: id,
        },
        headers: {
          authorization: token.value,
        },
      });
      toast({
        description: "Аппарат удален",
      });
    } catch (error) {
      toast({
        description: "Что-то пошло не так...",
        variant: "destructive",
      });
      console.error(error);
      throw error;
    }
  };

  return {
    deleteRequest,
  };
}
