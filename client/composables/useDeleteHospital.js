import { useToast } from "@/components/ui/toast/use-toast";
export default function useDeleteHospital() {
  const token = useToken();
  const { toast } = useToast();
  const {
    public: { apiBase },
  } = useRuntimeConfig();
  const deleteRequest = async (hospital_id) => {
    try {
      const response = await $fetch(
        `${apiBase}/db/deletehospital?id=${hospital_id}`,
        {
          method: "DELETE",
          headers: {
            authorization: token.value,
          },
        }
      );
      toast({
        description: "Учреждение удалено",
      });
    } catch (error) {
      console.log(error);
      toast({
        description: "Что-то пошло не так...",
        variant: "destructive",
      });
    }
  };

  return {
    deleteRequest,
  };
}
