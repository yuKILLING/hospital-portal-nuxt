export function useAddDevice() {
  const deviceName = ref("");
  const deviceDescription = ref("");
  const deviceLink = ref("");
  const token = useToken();
  const toast = useToast();
  const route = useRoute();
  const {
    public: { apiBase },
  } = useRuntimeConfig();
  const addDeviceToDb = async () => {
    try {
      if (
        deviceName.value === "" ||
        deviceDescription.value === "" ||
        deviceLink.value === ""
      ) {
        toast.add({
          title: "Заполните все поля!",
          timeout: 3500,
          color: "yellow",
        });
        return;
      }
      const formData = new FormData();
      formData.append("deviceName", deviceName.value);
      formData.append("deviceDescription", deviceDescription.value);
      formData.append("hospitalId", route.params.id);
      formData.append("deviceLink", deviceLink.value);

      const response = await $fetch(`${apiBase}/db/adddevice`, {
        method: 'POST',
        body: formData,
        headers: {
          authorization: token.value,
        },
      });
      navigateTo(`/hospital/${route.params.id}`);
      toast.add({
        title: "Аппарат добавлен!",
        timeout: 3500,
        color: "green",
      });
    } catch (error) {
      console.log(error);
      toast.add({
        title: "Что-то пошло не так...",
        timeout: 3500,
        color: "red",
      });
    }
  };
  return {
    deviceName,
    deviceDescription,
    deviceLink,
    addDeviceToDb,
  };
}
