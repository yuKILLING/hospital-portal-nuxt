<template>
  <div class="flex flex-col items-center justify-center mt-20">
    <h1 class="font-black font-size">Добавить учреждение</h1>
    <div class="flex flex-col gap-5 mt-12">
      <div class="card">
        <h2 class="text">Название учреждения</h2>
        <ModulesSecondInput v-model="hospitalName"> </ModulesSecondInput>
      </div>
      <div class="card">
        <h2 class="text">Номер</h2>
        <ModulesSecondInput v-model="telNum"> </ModulesSecondInput>
      </div>
      <div class="card">
        <h2 class="text">Почта</h2>
        <ModulesSecondInput v-model="email"> </ModulesSecondInput>
      </div>
      <div class="card">
        <h2 class="text">Индекс (необязательно), улица</h2>
        <ModulesSecondInput v-model="geoPos"> </ModulesSecondInput>
      </div>
      <div class="card">
        <h2 class="text">Имя руководителя</h2>
        <ModulesSecondInput v-model="leaderName"> </ModulesSecondInput>
      </div>
      <div class="card">
        <h2 class="text">Должность руководителя</h2>
        <ModulesSecondInput v-model="leaderJobTitle"> </ModulesSecondInput>
      </div>

      <div class="phone5:self-end self-center">
        <ModulesMainButton @click="addHospitalToDb()"
          >Добавить</ModulesMainButton
        >
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
  title: "Добавление учреждения",
  meta: [
    {
      name: "description",
      content: "Добавление учреждения",
    },
  ],
});
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
  @apply flex justify-center items-center gap-5 phone5:flex-row flex-col;
}

.text {
  @apply font-bold text-2xl w-80 text-center phone5:text-end;
}
</style>
