export default function autorization() {
  const toast = useToast();
  const email = ref("");
  const password = ref("");
  // const router = useRouter();
  const token = useToken();
  const {
    public: { apiBase },
  } = useRuntimeConfig();

  const login = async () => {
    try {
      if (email.value === "" || password.value === "") {
        toast.add({ title: "Заполните все поля", color: "yellow" });
        return;
      }

      const response = await $fetch(`${apiBase}/user/login`, {
        params: {
          login: email.value,
          password: password.value,
        },
      });
      
      if (response.isVerify) {
        token.value = `Bearer ${response.token}`;
        console.log("Logged in");
        navigateTo("/");
      }
    } catch (error) {
      console.error("Ошибка при авторизации: ", error.response);
      try {
        if (error.response._data.message === "Неверный логин или пароль") {
          toast.add({ title: "Неверный логин или пароль", color: "red" });
        }
      } catch (error) {
        toast.add({ title: "Произошла какая-то ошибка", color: "red" });
      }
    }
  };

  return {
    email,
    password,
    login,
  };
}
