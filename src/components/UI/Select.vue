<template>
  <select class="select text-small" @change="onChange">
    <option
      v-for="option of options"
      :key="option.value"
      :value="option.value"
      :selected="option.value == modelValue"
    >
      {{ option.text }}
    </option>
  </select>
</template>
<script>
export default {
  name: 'AppSelect',
  props: {
    options: {
      type: Array,
      required: true,
    },
    modelValue: String,
  },
  methods: {
    onChange(event) {
      this.$emit('update:modelValue', event.target.value)
    },
  },
}
</script>
<style lang="scss" scoped>
.select {
  background-color: $container-color;
  box-shadow: $input-shadow;
  border-radius: $border-radius;
  padding: 12px 16px;
  transition: box-shadow 0.15s, 0.15s;

  &:hover,
  &:active {
    box-shadow: $input-shadow-hover;
  }
}
</style>
