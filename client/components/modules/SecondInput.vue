<template>
  <input
    type="text"
    :value="modelValue"
    @input="updateInput"
    class="bg-transparent border-[1px] border-slate-500 sm:w-[380px] h-[50px] outline-none px-2 text-[20px] w-[300px] text-black"
    maxlength="100"
  />
</template>

<script setup>
defineProps({
  modelValue: [String, Number],
});
const emit = defineEmits(["update:modelValue"]);

const updateInput = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>

<style scoped></style>
