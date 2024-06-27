<template>
  <div class="bg-white rounded-2xl border-2 flex flex-col p-4 mb-3">
    <!-- Name Of Device -->
    <div class="flex justify-between relative">
      <h1 class="capitalize font-bold text-xl mb-3 truncate">
        {{ device.device_name }}
      </h1>

      <!-- Dialog trash -->
      <AlertDialog>
        <AlertDialogTrigger>
          <NuxtImg
            src="svgs/trash.svg"
            class="cursor-pointer w-4 h-4 absolute right-0 top-2 ml-2"
            v-if="token.length > 0"
        /></AlertDialogTrigger>
        <AlertDialogContent class="flex flex-col justify-center items-center">
          <AlertDialogHeader>
            <AlertDialogTitle class="text-center"
              >Вы уверены что хотите удалить учреждение?</AlertDialogTitle
            >
            <AlertDialogDescription>
              После удаления аппарат нельзя будет восстановить
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel class="w-20">Нет</AlertDialogCancel>
            <AlertDialogAction class="w-20" @click="$emit('deleteDevice', device.device_id)">Да</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>

    <!-- Description -->
    <p class="capitalize text-lg max-h-[80px] overflow-hidden"></p>
    {{ device.device_desk }}
    <!-- Button -->
    <div class="mt-3">
      <MainButton @click="getLink(device.device_id)">Открыть</MainButton>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  device: {
    type: Object,
    default: () => {},
  },
});
const token = useToken();
const { getLink } = useGetDownloadLink();
</script>

<script setup></script>
