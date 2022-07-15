<template>
  <button class="icon-btn">
    <img :src="iconUrl" alt="icon" class="icon-btn__icon" />
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
<style>
.icon-btn {
  border-radius: var(--big-border-radius);
  width: 32px;
  height: 32px;
  background-color: var(--container-color);
  box-shadow: var(--input-shadow);
  transition: box-shadow 0.15s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-btn:hover,
.icon-btn:active {
  box-shadow: var(--input-shadow-hover);
}

.icon-btn:active {
  transform: scale(0.99);
}

.icon-btn__icon {
  width: 20px;
  height: 20px;
}
</style>
