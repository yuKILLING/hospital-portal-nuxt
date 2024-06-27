<template>
  <div>
    <TheDeviceMain />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});

useHead({
  title: "Список аппаратуры",
  meta: [
    {
      name: "description",
      content: "Список аппаратуры учреждения",
    },
  ],
});
</script>
