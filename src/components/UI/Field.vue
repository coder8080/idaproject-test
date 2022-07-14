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
        type="text"
        class="field__input text-small"
        :class="{ error }"
        :id="id"
        :value="modelValue"
        @input="onInput"
        @focus="onFocus?.()"
      />
      <textarea
        v-else
        class="field__input text-small"
        :class="{ error }"
        :id="id"
        :value="modelValue"
        @input="onInput"
        rows="6"
        @focus="onFocus?.()"
      />
      <span
        class="field__placeholder text-small"
        :class="{ field__placeholder_shown: showPlaceholder }"
        >{{ placeholder }}</span
      >
      <span class="field__error text-micro">{{ error }}</span>
    </div>
  </div>
</template>
<script>
import formatNumber from '@/utilities/formatNumber'

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
      required: true,
    },
    dType: String,
    onFocus: Function,
    error: String,
    modelValue: String,
  },
  methods: {
    onInput(event) {
      let newValue = event.target.value
      if (this.dType === 'number') {
        newValue = formatNumber(newValue)
      }
      this.$emit('update:modelValue', newValue)
    },
  },
  computed: {
    showPlaceholder() {
      return this.modelValue.length === 0
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
  padding-top: 1px;
}

.field__label {
  color: var(--label-color);
  position: relative;
  align-self: flex-start;
  cursor: pointer;
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
  width: 100%;
  transition: box-shadow 0.15s, 0.15s;
  box-sizing: border-box;
  outline: none;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
}

.field__input:hover,
.field__input:focus {
  box-shadow: var(--input-shadow-hover);
}

.field__input.error {
  border-color: var(--red-color);
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
  display: none;
}

.field__error {
  color: var(--red-color);
  position: absolute;
  left: 0;
  bottom: -14px;
}

.field__placeholder_shown {
  display: initial;
}
</style>
