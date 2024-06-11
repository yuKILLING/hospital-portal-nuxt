export default defineNuxtRouteMiddleware((to, from) => {
  const token = useToken();
  const toast = useToast();
  const router = useRouter();

  if (token.value.length > 0) {
    return router.push("/");
  } else {
    return true;
  }
});
