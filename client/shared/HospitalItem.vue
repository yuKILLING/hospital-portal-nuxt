<template>
  <div class="bg-white rounded-2xl border-2 flex flex-col p-4 mb-3">
    <!-- Name Of Hospital -->
    <div class="flex justify-between relative">
      <h1
        class="capitalize font-bold text-xl mb-3 cursor-pointer"
        @click="navigateTo(`/hospital/${hospital.hospital_id}`)"
      >
        {{ hospital.hospital_name }}
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
            <AlertDialogAction class="w-20" @click="$emit('deleteHospital', hospital.hospital_id)">Да</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>

    <!-- Blocks -->
    <div class="mainBlocks">
      <div class="flex gap-1">
        <NuxtImg src="svgs/phone.svg" width="18px" />
        <p class="text-blue-500">{{ hospital.tel_num }}</p>
      </div>
      <div class="flex gap-1">
        <NuxtImg src="svgs/email.svg" width="18px" />
        <p>{{ hospital.email }}</p>
      </div>
    </div>

    <div class="flex gap-1">
      <NuxtImg src="svgs/location.svg" width="17px" />
      <p>{{ hospital.geo_pos }}</p>
    </div>

    <!-- Leader -->
    <div class="flex gap-2 mt-3">
      <NuxtImg src="svgs/user.svg" width="36px" />
      <div>
        <h1 class="font-bold capitalize">{{ hospital.leader_name }}</h1>
        <span class="capitalize">{{ hospital.leader_job_title }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  hospital: {
    type: Object,
    default: () => {},
  },
});
const token = useToken();
</script>

<style scoped>
.mainBlocks {
  @apply flex sm:flex-row flex-col gap-2 mb-1;
}
</style>
