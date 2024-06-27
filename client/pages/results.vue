<template>
  <div>
    <SearchedHospitals />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});

useHead({
  title: "Результаты поиска",
  meta: [
    {
      name: "description",
      content: "Результаты поиска учреждений Астраханской области",
    },
  ],
});
</script>
