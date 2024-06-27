<template>
  <div v-if="devices.length > 0">
    <DeviceItem
      v-for="device in devices"
      :key="device.device_id"
      :device="device"
      @deleteDevice="$emit('deleteDevice', $event)"
    />
  </div>
  <div v-else class="flex flex-col justify-center items-center mt-5 gap-2">
    <NuxtImg src="/svgs/empty.svg" width="250px" />
    <h1 class="text-xl">В этом учреждении нет аппаратов...</h1>
  </div>
  <div v-if="pending">
    <TheDeviceSkeleton v-for="i in 4" :key="i" />
  </div>
</template>

<script setup>
const props = defineProps({
  devices: {
    type: Array,
    default: () => [],
  },
  pending: {
    type: Boolean,
  },
});
const emits = defineEmits(['deleteDevice']);
</script>
