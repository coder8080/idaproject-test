<template>
  <button class="icon-btn">
    <img :src="iconUrl" alt="icon" class="icon" />
  </button>
</template>
<script>
export default {
  name: 'AppIconButton',
  props: {
    iconUrl: {
      type: String,
      requried: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.icon-btn {
  border-radius: $big-border-radius;
  width: 32px;
  height: 32px;
  background-color: $container-color;
  box-shadow: $input-shadow;
  transition: box-shadow 0.15s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:active {
    box-shadow: $input-shadow-hover;
  }

  &:active {
    transform: scale(0.99);
  }

  .icon {
    width: 20px;
    height: 20px;
  }
}
</style>
