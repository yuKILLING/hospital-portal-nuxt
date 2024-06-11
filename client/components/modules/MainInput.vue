<template>
  <form @submit.prevent class="flex phone2:justify-end justify-center">
    <div
      class="border-b-[1px] border-black focus-within:border-blue-600 transition-all duration-300 flex justify-center items-center"
    >
      <input
        type="text"
        class="bg-transparent outline-none w-80 h-12 text-2xl px-2"
        :value="modelValue"
        @input="updateInput"
        maxlength="100" 
        @keyup.enter="emit('searchRequest');"
      />
      <img src="~/assets/icons/search.svg" class="w-5 cursor-pointer" alt="Search" @click="emit('searchRequest');"/>
    </div>
  </form>
</template>

<script setup>
const props = defineProps({
  modelValue: String,
});
const emit = defineEmits(['searchRequest', 'update:modelValue']);

function updateInput(event) {
  emit("update:modelValue", event.target.value);
}


</script>