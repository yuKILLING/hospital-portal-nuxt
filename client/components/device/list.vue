<template>
  <div
    class="flex items-center flex-col space-y-6 mt-20"
    v-show="devices.length === 0 && typeOfReq === 1"
  >
    <img src="/assets/svgs/empty.svg" alt="empty" class="w-80" />
    <h1 class="text-2xl">В данном учреждении нет аппаратов</h1>
  </div>

  <div
    class="flex flex-col mt-9 min-h-96"
    v-show="devices.length !== 0 && typeOfReq === 1"
    v-auto-animate
  >
      <DeviceItem
        v-for="device in devices"
        :device="device"
        :key="device.device_id"
        @deleteDevice="$emit('deleteDevice', $event)" 
      ></DeviceItem>
  </div>

  <LayoutSkeletonList v-show="typeOfReq === 0" class="mt-9">
  </LayoutSkeletonList>
</template>

<script setup>
defineProps({
  devices: Array,
  typeOfReq: Number,
});
const emit = defineEmits(["deleteDevice"]);
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
