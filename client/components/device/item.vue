<template>
  <div class="bg-white rounded-[20px] border-2 flex flex-col gap-3 px-5 py-4 mb-3">
    <div class="flex justify-between items-start">
      <h1 class="font-bold text-2xl capitalize">{{ device.device_name }}</h1>
      <img src="/assets/svgs/trash.svg" alt="trash" class="w-4 m-2 cursor-pointer" @click="$emit('deleteDevice', device.device_id)" v-show="token.length > 0">
    </div>
    <p class="capitalize">{{ device.device_desk }}</p>
    <div>
      <ModulesMainButton @click="getLink(device.device_id)">Скачать</ModulesMainButton>
    </div>
  </div>
</template>

<script setup>
defineProps({
  device: Object,
});
const emit = defineEmits(['deleteDevice']);
const {getLink} = useOpenLink();
const token = useToken();

</script>
