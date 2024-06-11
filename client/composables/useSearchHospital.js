export function useSearchHospital() {
  const sortingArray = (hospitals, searchQuery) => {
    try {
      return hospitals.value.filter((hospital) =>
        hospital.hospital_name
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase())
      );
    } catch (error) {
      console.log(error);
    }
  };
  return { sortingArray };
}
