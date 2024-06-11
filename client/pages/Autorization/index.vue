<template>
  <div class="flex justify-center items-center h-screen">
    <div class="phone3:w-3/6 m-auto phone4:mt-44 mt-20">
      <div class="grid phone4:grid-cols-2 grid-rows-2 h-[700px]">
        <div class="bg-gradient-to-b from-sky-500 to-indigo-500 flex flex-col justify-center items-center text-white gap-2 phone4:order-first order-last h-[350px]">
          <h2 class="font-bold text-2xl">О чем сайт?</h2>
          <p class="text-center text-xl px-5">
            Этот сервис создан для просмотра и управления данными об аппаратуре подведомственных учреждений Астрахани.
          </p>
        </div>
        <div class="bg-white flex flex-col items-center justify-center gap-4 phone4:order-first order-last">
          <h1 class="text-3xl font-bold">Вход</h1>
          <div class="flex flex-col gap-4 items-center">
            <input
              type="text"
              class="bg-gray-300 w-80 h-12 rounded-sm outline-none text-2xl px-2"
              maxlength="50"
              v-model="email"
            />
            <input
              type="password"
              class="bg-gray-300 w-80 h-12 rounded-sm outline-none text-2xl px-2"
              maxlength="50"
              v-model="password"
            />
            <ModulesMainButton class="w-80" @click="login()">Войти</ModulesMainButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
  middleware: 'login'
});

useHead({
  title: 'Вход',
  meta: [{
    name: 'description',
    content: 'Вход'
  }]
})

const { email, password, login } = useLogIn()
</script>

<style scoped>
.info {
  background: linear-gradient(170deg, #34d399, #059669);
}
</style>
