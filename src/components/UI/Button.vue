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
}

.btn:disabled {
  background-color: var(--gray-color);
  color: var(--disabled-color);
}
</style>
