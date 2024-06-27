<template>
  <div class="bg-white rounded-2xl border-2 flex flex-col p-4 mb-3">
    <div>
      <Skeleton class="w-full max-w-[1000px] h-5" />
    </div>
    <div class="flex gap-2 mt-5">
      <Skeleton class="w-5 h-5" />
      <Skeleton class="w-full max-w-[200px] h-5 flex-grow" />
      <Skeleton class="w-5 h-5" />
      <Skeleton class="w-full max-w-[200px] h-5 flex-grow" />
    </div>
    <div class="mt-3 flex gap-2">
      <Skeleton class="w-5 h-5" />
      <Skeleton class="w-full max-w-[600px] h-5" />
    </div>
    <div class="mt-5 flex items-center gap-2">
      <Skeleton class="w-10 h-10 rounded-full" />
      <div class="flex flex-col gap-2">
        <Skeleton class="w-[200px] h-4" />
        <Skeleton class="w-[140px] h-4" />
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

