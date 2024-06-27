import { useToast } from "@/components/ui/toast/use-toast";
export function useAddHospital() {
  const runtime = useRuntimeConfig();
  const { toast } = useToast();
  const token = useToken();
  const hospitalName = ref("");
  const telNum = ref("");
  const email = ref("");
  const geoPos = ref("");
  const leaderName = ref("");
  const leaderJobTitle = ref("");
  const addHospitalToDb = async () => {
    try {
      if (
        hospitalName.value === "" ||
        telNum.value === "" ||
        email.value === "" ||
        geoPos.value === "" ||
        leaderName.value === "" ||
        leaderJobTitle.value === ""
      ) {
        toast({
          description: "Заполните все поля!",
        });
        return 1;
      }
      const formData = new FormData();
      formData.append("hospitalName", hospitalName.value);
      formData.append("telNum", telNum.value);
      formData.append("email", email.value);
      formData.append("geoPos", geoPos.value);
      formData.append("leaderName", leaderName.value);
      formData.append("leaderJobTitle", leaderJobTitle.value);
      const response = await $fetch(`db/addhospital`, {
        method: "POST",
        baseURL: runtime.public.apiBase,
        body: formData,
        headers: {
          authorization: token.value,
        },
      });
      console.log(response)
      hospitalName.value = "";
      telNum.value = "";
      email.value = "";
      geoPos.value = "";
      leaderName.value = "";
      leaderJobTitle.value = "";
      navigateTo("/");
      toast({
        description: "Учреждение добавлено",
      });
    } catch (error) {
      console.error("Ошибка при добавлении учреждения: ", error);
      toast({
        description: "Что-то пошло не так...",
        variant: "destructive",
      });
    }
  };
  return {
    hospitalName,
    telNum,
    email,
    geoPos,
    leaderName,
    leaderJobTitle,
    addHospitalToDb,
  };
}
