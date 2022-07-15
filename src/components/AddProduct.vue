<template>
  <transition :name="hasAnalyzed && !isPC ? 'popup' : ''">
    <div class="add-product" v-show="hasAnalyzed && (isPopupShown || isPC)">
      <div class="add-product__title-container">
        <h1 class="add-product__title">Добавление товара</h1>
        <app-icon-button
          class="add-product__popup-button"
          @click="togglePopup"
          :iconUrl="require('../assets/icons/close-circle-line.svg')"
        />
      </div>
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
  </transition>
</template>
<script>
import { mutationTypes } from '@/store/modules/products'
import { mapState } from 'vuex'

export default {
  name: 'AppAddProduct',
  data() {
    return {
      title: '',
      description: '',
      imgUrl: '',
      price: '',
      wasFocused: false,
      isPC: true,
      hasAnalyzed: false,
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
      this.togglePopup()
    },
    analyze() {
      if (window.innerWidth < 700) {
        this.isPC = false
      } else {
        this.isPC = true
      }
      this.hasAnalyzed = true
    },
    togglePopup() {
      this.$store.commit(mutationTypes.togglePopup)
    },
  },
  computed: {
    ...mapState({
      isPopupShown: (state) => state.products.isPopupShown,
    }),
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
  mounted() {
    this.analyze()
    window.addEventListener('resize', this.analyze)
  },
}
</script>
<style>
.add-product__title {
  margin: 0;
}

.add-product__title-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}

.add-product {
  position: sticky;
  top: 32px;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 16px;
  grid-area: add-product;
}

@media screen and (max-width: 700px) {
  .add-product {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    background-color: var(--background-color);
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    opacity: 1;
    display: auto;
  }
}

.add-product__form {
  background-color: var(--container-color);
  width: 332px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: var(--card-shadow);
  padding: 24px;
}

.add-product__button {
  margin-top: 8px;
}

@media screen and (min-width: 700px) {
  .add-product__popup-button {
    display: none !important;
  }
}
/* Vue animations */
.popup-enter-active,
.popup-leave-active {
  transition: opacity 0.3s;
}

.popup-enter-from,
.popup-leave-to {
  opacity: 0;
}
</style>
