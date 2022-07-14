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
      console.log('change')
      this.$emit('update:modelValue', event.target.value)
    },
  },
}
</script>
<style scoped>
.select {
  background-color: var(--container-color);
  box-shadow: var(--input-shadow);
  border-radius: var(--border-radius);
  padding: 12px 16px;
  transition: box-shadow 0.15s, 0.15s;
}

.select:hover,
.select:active {
  box-shadow: var(--input-shadow-hover);
}
</style>
