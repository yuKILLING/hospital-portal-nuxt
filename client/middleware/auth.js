export default defineNuxtRouteMiddleware((to, from) => {
  const token = useToken();
  const toast = useToast();
  const router = useRouter();

  if (token.value.length > 0) {
    // Проверка, чтобы избежать бесконечного цикла перенаправлений
    if (to.fullPath !== from.fullPath) {
      return true; // Разрешаем навигацию
    }
  } else {
    toast.add({ title: "Вначале войдите в аккаунт", timeout: 3500, color: "red" });
    return router.push('/autorization');
  }
});
