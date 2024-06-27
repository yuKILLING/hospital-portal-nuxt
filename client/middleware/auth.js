import { useToast } from "@/components/ui/toast/use-toast";
export default defineNuxtRouteMiddleware((to, from) => {
  const token = useToken();
  const { toast } = useToast();
  const router = useRouter();

  if (token.value.length > 0) {
    if (to.fullPath !== from.fullPath) {
      return true;
    }
  } else {
    toast({
      description: "Вначале войдите в аккаунт.",
    });
    return router.push("/authorization");
  }
});
