export function useAddHospital() {
  const token = useToken();
  const toast = useToast();
  const hospitalName = ref("");
  const telNum = ref("");
  const email = ref("");
  const geoPos = ref("");
  const leaderName = ref("");
  const leaderJobTitle = ref("");
  const {
    public: { apiBase },
  } = useRuntimeConfig();
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
        toast.add({
          title: "Заполните все поля",
          timeout: 3500,
          color: "yellow",
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
      const response = await $fetch(`${apiBase}/db/addhospital`, {
        method: "POST",
        body: formData,
        headers: {
          authorization: token.value,
        },
      });
      hospitalName.value = "";
      telNum.value = "";
      email.value = "";
      geoPos.value = "";
      leaderName.value = "";
      leaderJobTitle.value = "";
      navigateTo("/");
      toast.add({
        title: "Учреждение добавлено",
        timeout: 3500,
        color: "green",
      });
    } catch (error) {
      toast.add({
        title: "Что-то пошло не так...",
        timeout: 3500,
        color: "red",
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
