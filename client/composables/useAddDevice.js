import { useToast } from "@/components/ui/toast/use-toast";
export function useAddDevice() {
  const deviceName = ref("");
  const deviceDescription = ref("");
  const deviceLink = ref("");
  const token = useToken();
  const { toast } = useToast();
  const route = useRoute();
  const runtime = useRuntimeConfig();

  const addDeviceToDb = async () => {
    try {
      if (
        deviceName.value === "" ||
        deviceDescription.value === "" ||
        deviceLink.value === ""
      ) {
        toast({
          description: "Заполните все поля!",
        });
        return;
      }
      const formData = new FormData();
      formData.append("deviceName", deviceName.value);
      formData.append("deviceDescription", deviceDescription.value);
      formData.append("hospitalId", route.params.id);
      formData.append("deviceLink", deviceLink.value);

      const response = await $fetch(`${runtime.public.apiBase}/db/adddevice`, {
        method: "POST",
        body: formData,
        headers: {
          authorization: token.value,
        },
      });
      navigateTo(`/hospital/${route.params.id}`);
      toast({
        description: "Аппарат добавлен",
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
    deviceName,
    deviceDescription,
    deviceLink,
    addDeviceToDb,
  };
}
