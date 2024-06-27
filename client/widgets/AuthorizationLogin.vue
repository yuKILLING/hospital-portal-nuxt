<template>
  <div
    class="flex flex-col lg:flex-row justify-center gap-2 items-center m-2 mt-10 lg:mt-52"
  >
    <div class="blocks bg-gradient-to-b from-sky-500 to-indigo-500 text-white">
      <h1 class="text-2xl font-bold">О чем сайт?</h1>
      <p class="text-center text-xl px-5">
        Этот сервис создан для просмотра и управления данными об аппаратуре
        подведомственных учреждений Астрахани.
      </p>
    </div>
    <div class="blocks bg-white gap-4 order-last">
      <h1 class="text-3xl font-bold">Вход</h1>
      <div class="flex flex-col gap-4 items-center">
        <input
          type="text"
          class="input"
          maxlength="50"
          placeholder="Логин"
          v-model="email"
        />
        <input
          type="password"
          class="input"
          maxlength="50"
          placeholder="Пароль"
          v-model="password"
        />
        <MainButton class="w-80" @click="login()">Войти</MainButton>
      </div>
    </div>
  </div>
</template>

<script setup>
const { email, password, login } = useLogIn();
</script>

<style scoped>
.blocks {
  @apply flex flex-col justify-center items-center sm:w-[400px] w-full h-[270px] rounded-xl;
}

.input {
  @apply bg-gray-300 w-80 h-12 rounded-lg outline-none text-xl px-2 pl-3 placeholder:text-xl;
}
</style>
