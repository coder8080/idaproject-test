<template>
  <div class="field">
    <label
      :for="id"
      class="label text-smaller"
      :class="{ required: isRequired }"
      >{{ label }}</label
    >
    <div class="placeholder-container">
      <input
        v-if="type === 'input'"
        type="text"
        class="input text-small"
        :class="{ error }"
        :id="id"
        :value="modelValue"
        placeholder=" "
        :inputmode="dType === 'number' ? 'numeric' : 'text'"
        @input="onInput"
        @focus="onFocus?.()"
      />
      <textarea
        v-else
        class="input text-small"
        :class="{ error }"
        :id="id"
        :value="modelValue"
        placeholder=" "
        rows="6"
        @input="onInput"
        @focus="onFocus?.()"
      />
      <span
        class="placeholder text-small"
        :class="{ shown: showPlaceholder }"
        >{{ placeholder }}</span
      >
      <span class="error-text text-micro">{{ error }}</span>
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
<style lang="scss" scoped>
.field {
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 100%;
  padding-top: 1px;

  .label {
    color: $label-color;
    position: relative;
    align-self: flex-start;
    cursor: pointer;

    &.required::after {
      content: '';
      display: block;
      position: absolute;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      top: -1px;
      right: -6px;
      background-color: $red-color;
    }
  }

  .placeholder-container {
    position: relative;

    .input {
      background-color: $container-color;
      box-shadow: $input-shadow;
      border-radius: $border-radius;
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

      &[type='number']::-webkit-outer-spin-button,
      &[type='number']::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      &[type='number'][type='number'] {
        -moz-appearance: textfield;
      }

      &:placeholder-shown + .placeholder {
        display: initial;
      }

      &:hover,
      &:focus {
        box-shadow: $input-shadow-hover;
      }

      &.error {
        border-color: $red-color;
      }
    }

    .placeholder {
      position: absolute;
      color: $disabled-color;
      pointer-events: none;
      top: 12px;
      left: 16px;
      right: 16px;
      font-weight: 400;
      display: none;
    }
  }

  .error-text {
    color: $red-color;
    position: absolute;
    left: 0;
    bottom: -14px;
  }
}
</style>
