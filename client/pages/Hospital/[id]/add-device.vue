<template>
  <div class="flex flex-col items-center mt-20">
    <h1 class="font-black font-size">Добавить аппарат</h1>
    <div class="flex flex-col gap-5 mt-12">
      <div class="card">
        <h2 class="text">Название аппарата</h2>
        <ModulesSecondInput v-model="deviceName"> </ModulesSecondInput>
      </div>
      <div class="card">
        <h2 class="text">Описание аппарата</h2>
        <ModulesSecondInput v-model="deviceDescription"> </ModulesSecondInput>
      </div>
      <div class="card">
        <h2 class="text">Ссылка</h2>
        <ModulesSecondInput v-model="deviceLink"> </ModulesSecondInput>
      </div>
      <div class="phone5:self-end self-center">
        <ModulesMainButton @click="addDeviceToDb()">Добавить</ModulesMainButton>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
  middleware: "auth",
});

useHead({
  title: "Добавление аппаратуры",
  meta: [
    {
      name: "description",
      content: "Добавление аппратуры в учреждение",
    },
  ],
});

const { deviceName, deviceDescription, addDeviceToDb, deviceLink } =
  useAddDevice();
</script>

<style scoped>
.font-size {
  font-size: clamp(20px, 6vw, 35px);
}

.card {
  @apply flex justify-center items-center gap-5 flex-col phone5:flex-row;
}

.text {
  @apply font-bold text-2xl w-80 text-center phone5:text-end;
}
</style>
