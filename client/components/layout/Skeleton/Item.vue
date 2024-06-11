<template>
  <div
    class="flex flex-col xl:w-[1270px] xl:h-[200px] bg-white border-2 px-[20px] py-[20px] mx-2 rounded-[20px] xl:whitespace-nowrap overflow-hidden"
  >
    <div class="h-[30px] xl:w-[900px] bg-[#ddd] skeleton"></div>
    <div class="h-[15px] xl:w-[700px] bg-[#ddd] mt-[30px] skeleton"></div>
    <div class="h-[15px] xl:w-[700px] bg-[#ddd] mt-[10px] skeleton"></div>
    <div class="flex mt-[30px]">
      <div class="h-[40px] w-[40px] bg-[#ddd] skeleton"></div>
      <div class="ml-[10px]">
        <div class="h-[15px] xl:w-[300px] bg-[#ddd] skeleton"></div>
        <div class="h-[15px] w-[200px] bg-[#ddd] mt-[10px] skeleton"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skeleton {
  animation: skeleton-loading 1s linear infinite alternate;
}

@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}
</style>
