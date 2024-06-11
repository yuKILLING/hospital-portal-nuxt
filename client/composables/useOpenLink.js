export function useOpenLink() {
  const toast = useToast();
  const {
    public: { apiBase },
  } = useRuntimeConfig();

  const openInNewTab = (url) => {
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer'; // Добавляем безопасность, чтобы предотвратить доступ новой вкладки к текущему окну
    document.body.appendChild(a); // Добавляем элемент в DOM
    a.click(); // Эмулируем клик
    document.body.removeChild(a); // Удаляем элемент из DOM после клика
  };

  const getLink = async (id) => {
    try {
      const response = await $fetch(`${apiBase}/db/getdevicelink`, {
        params: { id },
      });
      const link = response.deviceLink;
      if (link) {
        openInNewTab(link); // Используем новый метод для открытия ссылки
      } else {
        toast.add({
          title: "Нет ссылки для заданного аппарата",
          timeout: 3500,
          color: "red",
        });
      }
    } catch (error) {
      console.error("Ошибка при скачивании файла:", error);
    }
  };

  return {
    getLink,
  };
}
