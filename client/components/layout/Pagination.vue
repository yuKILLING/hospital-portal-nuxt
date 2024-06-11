<template>
  <div class="pagination flex items-center justify-center my-6 justify-self-end">
    <div
      v-show="!isPaginationHidden"
      v-for="page in totalPages"
      :key="page"
      class="flex items-center justify-center border-2 border-black h-[30px] w-[30px] cursor-pointer p-[15px] font-bold"
      :class="{
        'current-page': page === currentPage,
        'rounded-l-lg': page === 1,
        'rounded-r-lg': page === totalPages,
      }"
      @click="$emit('fetchPage', page)"
    >
      {{ page }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  totalPages: Number,
  currentPage: Number,
  isPaginationHidden: Boolean,
})
</script>

<style scoped>
.current-page {
  border-color: rgba(106, 106, 255, 1);
}
</style>
