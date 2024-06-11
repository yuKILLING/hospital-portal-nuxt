<template>
  <div v-if="hospitals <= 0" class="mt-9">
    <LayoutSkeletonList> </LayoutSkeletonList>
  </div>
  <div class="flex flex-col mt-9" v-else v-auto-animate>
    <!-- <TransitionGroup name="list">
      <HospitalItem
        v-for="hospital in hospitals"
        :hospital="hospital"
        :key="hospital.hospital_id"
        @deleteHospital="$emit('deleteHospital', $event)"
      >
      </HospitalItem>
    </TransitionGroup> -->
    <HospitalItem
        v-for="hospital in hospitals"
        :hospital="hospital"
        :key="hospital.hospital_id"
        @deleteHospital="$emit('deleteHospital', $event)"
      >
      </HospitalItem>
  </div>
</template>

<script setup>
defineProps({
  hospitals: Array,
});
</script>

<style scoped>
/* .list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
} */
</style>
