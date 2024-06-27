<template>
  <div>
    <SearchedDevices />
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
      content: "Результаты поиска аппаратов учреждения Астраханской области",
    },
  ],
});
</script>
