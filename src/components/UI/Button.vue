<template>
  <button class="btn"><slot /></button>
</template>
<script>
export default {
  name: 'AppButton',
}
</script>
<style lang="scss" scoped>
.btn {
  padding: 10px 0;
  border-radius: $big-border-radius;
  color: #fff;
  background-color: $green-color;
  cursor: pointer;
  box-shadow: 0px 0px 0px $green-color;
  transition: box-shadow 0.15s, background-color 0.1s, color 0.1s;

  &:disabled {
    background-color: $gray-color;
    color: $disabled-color;
  }

  &:enabled:active {
    transform: scale(0.99);
  }

  &:enabled:hover {
    box-shadow: 0px 0px 7px $green-color;
  }
}
</style>
