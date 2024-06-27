<template>
  <div class="bg-white rounded-2xl border-2 flex flex-col p-4 mb-3">
    <div>
      <Skeleton class="w-full max-w-[1000px] h-5" />
    </div>

    <div class="mt-3 flex gap-2">
      <Skeleton class="w-5 h-5" />
      <Skeleton class="w-full max-w-[600px] h-5" />
    </div>
    <div class="mt-5 flex items-center gap-2">
      <Skeleton class="w-28 h-10 rounded" />
    </div>
  </div>
</template>

<script setup></script>
