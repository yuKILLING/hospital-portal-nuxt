<template>
  <header
    class="bg-oceanDark border-b-oceanLight border-b-2 h-14 flex justify-around items-center text-white"
  >
    <NuxtImg
      src="/header-logo.png"
      width="36px"
      class="cursor-pointer"
      @click="navigateTo('/')"
    />
    <button type="button" class="button" @click="navigateTo('/authorization')" v-if="token.length === 0">
      <span class="button__text">Войти</span>
      <span class="button__icon">
        <span class="text-lg">&gt;</span>
      </span>
    </button>

    <button type="button" class="button" @click="logOut()" v-else>
      <span class="button__text">Выйти</span>
      <span class="button__icon">
        <span class="text-lg">&lt;</span>
      </span>
    </button>
  </header>
</template>

<script setup>
const token = useToken();
const router = useRouter();
const logOut = () => {
  router.push("/");
  location.reload()
};
</script>

<style scoped>
.button {
  @apply flex h-8 p-0  bg-sky-600 border-none outline-none rounded overflow-hidden font-medium cursor-pointer transition;
}

.button:hover {
  @apply bg-sky-800;
}

.button:active {
  @apply bg-green-900;
}

.button__text,
.button__icon {
  @apply inline-flex items-center h-full text-white;
}

.button__text {
  @apply px-2;
}

.button__icon {
  @apply px-1 text-2xl bg-black bg-opacity-20;
}
</style>
