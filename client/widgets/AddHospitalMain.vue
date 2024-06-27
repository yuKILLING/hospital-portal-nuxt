<template>
  <div class="flex flex-col items-center justify-center mt-20">
    <h1 class="font-black font-size">Добавить учреждение</h1>
    <div class="flex flex-col gap-5 mt-12">
      <div class="card">
        <h2 class="text">Название учреждения</h2>
        <AddInput v-model="hospitalName"> </AddInput>
      </div>
      <div class="card">
        <h2 class="text">Номер</h2>
        <AddInput v-model="telNum"> </AddInput>
      </div>
      <div class="card">
        <h2 class="text">Почта</h2>
        <AddInput v-model="email"> </AddInput>
      </div>
      <div class="card">
        <h2 class="text">Индекс (необязательно), улица</h2>
        <AddInput v-model="geoPos"> </AddInput>
      </div>
      <div class="card">
        <h2 class="text">Имя руководителя</h2>
        <AddInput v-model="leaderName"> </AddInput>
      </div>
      <div class="card">
        <h2 class="text">Должность руководителя</h2>
        <AddInput v-model="leaderJobTitle"> </AddInput>
      </div>

      <div class="self-center lg:self-end">
        <MainButton @click="addHospitalToDb()"
          >Добавить</MainButton
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const {
  hospitalName,
  telNum,
  email,
  geoPos,
  leaderName,
  leaderJobTitle,
  addHospitalToDb,
} = useAddHospital();
</script>

<style scoped>
.font-size {
  font-size: clamp(20px, 5vw, 35px);
}

.card {
  @apply flex flex-col lg:flex-row justify-center items-center gap-5;
}

.text {
  @apply font-bold text-2xl w-80 text-center lg:text-end;
}
</style>
