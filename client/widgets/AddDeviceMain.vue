<template>
  <div class="flex flex-col items-center mt-20">
    <h1 class="font-black font-size">Добавить аппарат</h1>
    <div class="flex flex-col gap-5 mt-12">
      <div class="card">
        <h2 class="text">Название аппарата</h2>
        <AddInput v-model="deviceName"> </AddInput>
      </div>
      <div class="card">
        <h2 class="text">Описание аппарата</h2>
        <AddInput v-model="deviceDescription"> </AddInput>
      </div>
      <div class="card">
        <h2 class="text">Ссылка</h2>
        <AddInput v-model="deviceLink"> </AddInput>
      </div>
      <div class="lg:self-end self-center">
        <MainButton @click="addDeviceToDb()">Добавить</MainButton>
      </div>
    </div>
  </div>
</template>

<script setup>
const { deviceName, deviceDescription, addDeviceToDb, deviceLink } =
  useAddDevice();
</script>

<style scoped>
.font-size {
  font-size: clamp(25px, 5vw, 35px);
}
.card {
  @apply flex justify-center items-center gap-5 flex-col lg:flex-row;
}

.text {
  @apply font-bold text-2xl w-80 text-center lg:text-end;
}
</style>
