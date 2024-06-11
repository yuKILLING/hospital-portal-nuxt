export default function useDeleteHospital() {
  const token = useToken();
  const toast = useToast();
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
      toast.add({
        title: "Учреждение успешно удалено!",
        timeout: 3500,
        color: "green",
      });
    } catch (error) {
      console.log(error);
      toast.add({
        title: "Произошла какая-то ошибка...",
        timeout: 3500,
        color: "red",
      });
      // if (
      //   error.response.data.error ===
      //   'UPDATE или DELETE в таблице "hospitals" нарушает ограничение внешнего ключа "fk_hospitals" таблицы "devices"'
      // ) {
      //   toast.add({
      //     title: "Сначала удалите все аппараты данного учреждения!",
      //     timeout: 3500,
      //     color: "yellow",
      //   });
      // } else {
      //   toast.add({
      //     title: "Произошла какая-то ошибка...",
      //     timeout: 3500,
      //     color: "red",
      //   });
      // }
    }
  };

  return {
    deleteRequest,
  };
}
