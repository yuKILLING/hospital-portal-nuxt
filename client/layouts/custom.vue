<template>
  <div class="CustomLayout flex flex-col text-black">
    <LayoutHeader />
    <div class="bg-[#F1F1F1] grow-0 min-h-screen pb-5">
      <slot></slot>
    </div>
    <LayoutFooter />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');

@font-face {
  font-family: 'Nunito';
  src: url('/assets/font/nunito.tff') format('tff'),
}

body {
  overflow-x: hidden;
  font-family: "Nunito";
}


</style>