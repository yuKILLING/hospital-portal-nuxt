<template>
  <button
    class="button-39 bg-sky-600 hover:bg-sky-700 transition-all duration-200 font-body"
    role="button"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.button-39 {
  border: 1px solid rgb(209, 213, 219);
  border-radius: 0.5rem;
  box-sizing: border-box;
  color: #111827;
  font-size: 1rem;
  line-height: 1.25rem;
  padding: 0.75rem 1rem;
  text-align: center;
  text-decoration: none #d1d5db solid;
  text-decoration-thickness: auto;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  font-weight: bold;
  color: white;
}

.button-39:active {
  outline: 2px solid transparent;
  background-color: rgb(212, 212, 212);
  outline-offset: 2px;
}

.button-39:focus-visible {
  box-shadow: none;
}
</style>
