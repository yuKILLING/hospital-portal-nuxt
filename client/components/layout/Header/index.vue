<template>
  <header
    class="bg-[#125379] border-b-[#009ee0] border-b-2 h-[50px] flex justify-around items-center shrink-0"
  >
    <div>
      <img
        src="/assets/flag.png"
        alt="Logo"
        @click="$router.push('/')"
        class="cursor-pointer"
      />
    </div>
    <div class="flex items-center gap-2" v-show="token.length === 0">
      <h1
        class="text-white font-bold text-xl cursor-pointer"
        @click="$router.push('/autorization')"
      >
        Войти
      </h1>
      <img src="~/assets/svgs/login.svg" alt="login" class="w-6" />
    </div>
    <div class="flex items-center gap-2" v-show="token.length > 0">
      <h1 class="text-white font-bold text-xl cursor-pointer" @click="logOut()">
        Выйти
      </h1>
      <img src="~/assets/svgs/logout.svg" alt="logout" class="w-6" />
    </div>
  </header>
</template>

<script setup>
const token = useToken();
const router = useRouter();
const logOut = () => {
  token.value = "";
  router.push("/");
};
</script>
