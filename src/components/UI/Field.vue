<template>
  <div class="field">
    <label
      :for="id"
      class="field__label text-smaller"
      :class="{ field__label_required: isRequired }"
      >{{ label }}</label
    >
    <div class="field__placeholder-container">
      <input
        v-if="type === 'input'"
        :placeholder="placeholder"
        type="text"
        class="field__input text-small"
        :id="id"
        :value="modelValue"
        :required="isRequired"
        @input="onInput"
      />
      <textarea
        v-else
        class="field__input text-small"
        :id="id"
        :value="modelValue"
        :required="isRequired"
        @input="onInput"
        rows="6"
      />
      <span class="field__placeholder text-small">{{ placeholder }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppField',
  props: {
    isRequired: {
      type: Boolean,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      require: true,
    },
    modelValue: String,
  },
  methods: {
    onInput(event) {
      this.$emit('update:modelValue', event.target.value)
    },
  },
}
</script>
<style scoped>
.field {
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 100%;
}

.field__label {
  color: var(--label-color);
  position: relative;
  align-self: flex-start;
}

.field__label_required::after {
  content: '';
  display: block;
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  top: -1px;
  right: -6px;
  background-color: var(--red-color);
}

.field__input {
  background-color: var(--container-color);
  box-shadow: var(--input-shadow);
  border-radius: var(--border-radius);
  border: none;
  padding: 12px 16px;
  resize: none;
  text-size-adjust: none;
  width: 100%;
}

.field__placeholder-container {
  position: relative;
}

.field__placeholder {
  position: absolute;
  color: var(--disabled-color);
  pointer-events: none;
  top: 12px;
  left: 16px;
  right: 16px;
  font-weight: 400;
  text-size-adjust: none;
}

.field__input:valid + .field__placeholder {
  display: none;
}
</style>
