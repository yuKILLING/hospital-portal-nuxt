<template>
  <div class="flex justify-center items-center">
    <AddHospitalMain> </AddHospitalMain>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
  middleware: "auth",
});
useHead({
  title: "Добавление учреждения",
  meta: [
    {
      name: "description",
      content: "Добавление учреждения",
    },
  ],
});
</script>

<style scoped></style>
