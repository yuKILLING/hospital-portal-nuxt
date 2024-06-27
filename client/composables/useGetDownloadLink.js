import { useToast } from "@/components/ui/toast/use-toast";

export function useGetDownloadLink() {
  const { toast } = useToast();
  const runtime = useRuntimeConfig();

  const openInNewTab = (url) => {
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click(); 
    document.body.removeChild(a);
  };

  const getLink = async (id) => {
    try {
      const response = await $fetch(`db/getdevicelink?id=${id}`, {
        baseURL: runtime.public.apiBase,
      });

      const link = response.deviceLink;

      if (link) {
        openInNewTab(link);
      } else {
        toast({
          description: "Нет ссылки для заданного аппарата.",
        });
      }
    } catch (error) {
      console.error("Ошибка при скачивании файла:", error);
      toast({
        description: "Что-то пошло не так...",
        variant: "destructive",
      });
    }
  };

  return {
    getLink,
  };
}
