<template>
  <div>
    <TheHospitalMain />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});

useHead({
  title: 'Учреждения Астраханской области',
  meta:[{
    name: 'description',
    content: 'Список учреждений Астраханской области'
  }]
})
</script>
