<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader />
    <main class="flex-1 bg-mainWhite">
      <slot> </slot>
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
@font-face {
  font-family: "Nunito";
  src: url("/assets/font/nunito.ttf") format("ttf");
}

/* body {
  font-family: "Nunito";
} */
</style>
