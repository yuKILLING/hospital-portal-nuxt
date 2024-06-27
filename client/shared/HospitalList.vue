<template>
  <div v-if="!pending">
    <HospitalItem
      v-for="hospital in hospitals"
      :key="hospital.id"
      :hospital="hospital"
      @deleteHospital="$emit('deleteHospital', $event)"
    />
  </div>
  <div v-else>
    <TheHospitalSkeleton v-for="i in 5" :key="i"/>
  </div>
</template>

<script setup>
const props = defineProps({
  hospitals: {
    type: Array,
    default: () => [],
  },
  pending: {
    type: Boolean
  },
});

</script>

<style scoped></style>
