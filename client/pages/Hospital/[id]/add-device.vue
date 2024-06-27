<template>
  <div>
    <AddDeviceMain />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
  middleware: "auth",
});

useHead({
  title: "Добавление аппаратуры",
  meta: [
    {
      name: "description",
      content: "Добавление аппратуры в учреждение",
    },
  ],
});
</script>
