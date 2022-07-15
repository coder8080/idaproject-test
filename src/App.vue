<template>
  <main class="app">
    <app-order-select />
    <app-add-product />
    <app-product-list />
  </main>
</template>
<script>
import AppProductList from '@/components/ProductList'
import AppAddProduct from '@/components/AddProduct'
import AppOrderSelect from '@/components/OrderSelect'
import 'normalize.css'

export default {
  name: 'App',
  components: {
    AppProductList,
    AppAddProduct,
    AppOrderSelect,
  },
  data() {
    return {
      isShown: true,
    }
  },
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border: none;
}

body {
  background-color: $background-color;
  font-family: $body-font;
  font-weight: $normal-font-weight;
  line-height: $normal-line-height;
}

h1,
h2,
h3 {
  font-weight: $title-font-weight;
}

h1 {
  font-size: $h1-font-size;
  line-height: $h1-line-height;
}

h2 {
  font-size: $h2-font-size;
  line-height: $h2-line-height;
}

h3 {
  font-size: $h3-font-size;
  line-height: $h3-line-height;
}

.text-small {
  font-size: $small-font-size;
  line-height: $small-line-height;
}

.text-smaller {
  font-size: $smaller-font-size;
  line-height: $smaller-line-height;
  letter-spacing: $smaller-letter-spacing;
}

.text-micro {
  font-size: $micro-font-size;
  line-height: $micro-line-height;
  letter-spacing: $micro-letter-spacing;
}

.app {
  padding: 32px;
  row-gap: 20px;
  column-gap: 16px;
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: min-content 1fr;
  grid-template-areas: 'add-product order-select' 'add-product product-list';

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'order-select' 'product-list';
  }

  @media screen and (max-width: 330px) {
    padding: 16px !important;
  }
}
</style>
