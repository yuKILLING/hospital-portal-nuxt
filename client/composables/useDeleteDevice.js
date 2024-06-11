export default function useDeleteDevice() {
  const token = useToken();
  const toast = useToast();
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
      toast.add({
        title: "Аппарат успешно удален!",
        timeout: 3500,
        color: "green",
      });
    } catch (error) {
      toast.add({
        title: "Произошла какая-то ошибка...",
        timeout: 3500,
        color: "red",
      });
      console.error(error);
      throw error;
    }
  };

  return {
    deleteRequest,
  };
}