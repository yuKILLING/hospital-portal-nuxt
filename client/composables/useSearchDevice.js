export function useSearchDevice() {
  const sortingArray = (devices, searchQuery) => {
    try {
      return devices.value.filter((device) =>
        device.device_name
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase())
      );
    } catch (error) {
      console.log(error);
    }
  };
  return { sortingArray };
}
