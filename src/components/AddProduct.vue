<template>
  <div class="add-product">
    <h1 class="add-product__title">Добавление товара</h1>
    <form class="add-product__form" @submit.prevent="onSubmit">
      <app-field
        id="product-title"
        label="Наименование товара"
        :isRequired="true"
        placeholder="Введите наименование товара"
        type="input"
        v-model="title"
        :onFocus="onFocus"
        :error="titleError"
      />
      <app-field
        id="product-description"
        label="Описание товара"
        :isRequired="false"
        placeholder="Введите описание товара"
        type="textarea"
        v-model="description"
        :onFocus="onFocus"
      />
      <app-field
        id="product-img-url"
        label="Ссылка на изображение товара"
        :isRequired="true"
        placeholder="Введите ссылку"
        type="input"
        v-model="imgUrl"
        :onFocus="onFocus"
        :error="imgUrlError"
      />
      <app-field
        id="product-price"
        label="Цена товара"
        :isRequired="true"
        placeholder="Введите цену"
        type="input"
        v-model="price"
        :onFocus="onFocus"
        :error="priceError"
        dType="number"
      />
      <app-button
        :disabled="buttonDisabled"
        class="add-product__button"
        type="submit"
      >
        Добавить товар
      </app-button>
    </form>
  </div>
</template>
<script>
import { mutationTypes } from '@/store/modules/products'

export default {
  name: 'AppAddProduct',
  data() {
    return {
      title: '',
      description: '',
      imgUrl: '',
      price: '',
      wasFocused: false,
    }
  },
  methods: {
    onFocus() {
      this.wasFocused = true
    },
    onSubmit() {
      this.$store.commit(mutationTypes.addProduct, {
        title: this.title,
        description: this.description,
        imgUrl: this.imgUrl,
        price: Number(this.price.replaceAll(' ', '')),
      })
      this.title = ''
      this.description = ''
      this.imgUrl = ''
      this.price = ''
      this.wasFocused = false
    },
  },
  computed: {
    titleError() {
      return !this.wasFocused || this.title ? '' : 'Поле является обязательным'
    },
    imgUrlError() {
      return !this.wasFocused || this.imgUrl ? '' : 'Поле является обязательным'
    },
    priceError() {
      if (!this.wasFocused) return ''
      if (this.price) {
        return isNaN(this.price.replaceAll(' ', ''))
          ? 'Введите только цифру'
          : ''
      } else {
        return 'Поле является обязательным'
      }
    },
    anyErrors() {
      return this.titleError || this.imgUrlError || this.priceError
        ? true
        : false
    },
    buttonDisabled() {
      return !this.wasFocused || this.anyErrors
    },
  },
}
</script>
<style scoped>
.add-product__title {
  margin: 0;
}
.add-product {
  position: sticky;
  top: 32px;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.add-product__form {
  background-color: var(--container-color);
  min-width: 332px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: var(--card-shadow);
  padding: 24px;
}

.add-product__button {
  margin-top: 8px;
}
</style>
