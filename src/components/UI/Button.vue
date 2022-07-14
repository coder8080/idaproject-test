<template>
  <button class="btn"><slot /></button>
</template>
<script>
export default {
  name: 'AppButton',
}
</script>
<style scoped>
.btn {
  padding: 10px 0;
  border-radius: var(--big-border-radius);
  color: #fff;
  background-color: var(--green-color);
  cursor: pointer;
  box-shadow: 0px 0px 0px var(--green-color);
  transition: box-shadow 0.15s, background-color 0.1s, color 0.1s;
}

.btn:disabled {
  background-color: var(--gray-color);
  color: var(--disabled-color);
}

.btn:enabled:active {
  transform: scale(0.99);
}

.btn:enabled:hover {
  box-shadow: 0px 0px 7px var(--green-color);
}
</style>
