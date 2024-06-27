import { useToast } from "@/components/ui/toast/use-toast";
export default function useLogIn() {
  const runtime = useRuntimeConfig();
  const token = useToken();
  const { toast } = useToast();
  const email = ref("");
  const password = ref("");

  const login = async () => {
    try {
      if (email.value === "" || password.value === "") {
        toast({
          description: "Заполните все поля!",
        });
        return;
      }
      const response = await $fetch("user/login", {
        baseURL: runtime.public.apiBase,
        method: "GET",
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
          toast({
            description: "Неверный логин или пароль",
            variant: "destructive",
          });
        }
      } catch (error) {
        toast({
          description: "Что-то пошло не так...",
          variant: "destructive",
        });
      }
    }
  };

  return {
    email,
    password,
    login,
  };
}
