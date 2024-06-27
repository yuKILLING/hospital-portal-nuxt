<template>
  <div class="main flex flex-col min-h-screen">
    <TheHeader />
    <main class="flex-1 bg-mainWhite">
      <slot> </slot>
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
.main{
  font-family: Open Sans;
}
</style>
