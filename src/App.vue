<template>
  <main class="app">
    <app-add-product />
    <app-product-list />
  </main>
</template>
<script>
import AppProductList from '@/components/ProductList.vue'
import AppAddProduct from '@/components/AddProduct.vue'
import 'normalize.css'

export default {
  name: 'App',
  components: {
    AppProductList,
    AppAddProduct,
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap');

:root {
  --background-color: #faf9f7;
  --container-color: #fffefb;
  --green-color: #7bae73;
  --orange-color: #ff8484;
  --red-color: #ff8484;
  --text-color: #3f3f3f;
  --label-color: #49485e;
  --shadow-color: #000;
  --gray-color: #eeeeee;
  --disabled-color: #b4b4b4;

  --card-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  --card-shadow-hover: 0px 20px 30px rgba(0, 0, 0, 0.08),
    0px 6px 10px rgba(0, 0, 0, 0.08);
  --input-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  --input-shadow-hover: 0px 2px 10px rgba(0, 0, 0, 0.2);

  --body-font: 'Source Sans Pro', sans-serif;

  --border-radius: 4px;
  --big-border-radius: 10px;

  --h1-font-size: 1.75rem;
  --h1-line-height: 2.2rem;
  --h2-font-size: 1.5rem;
  --h2-line-height: 1.885625rem;
  --h3-font-size: 1.25rem;
  --h3-line-height: 1.57125rem;
  --normal-font-size: 1rem;
  --normal-line-height: 1.256875rem;
  --small-font-size: 0.75rem;
  --small-line-height: 0.9425rem;
  --smaller-font-size: 0.625rem;
  --smaller-line-height: 0.785625rem;
  --smaller-letter-spacing: -2%;

  --title-font-weight: 600;
  --normal-font-weight: 400;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border: none;
}

body {
  background-color: var(--background-color);
  font-family: var(--body-font);
  font-weight: var(--normal-font-weight);
  line-height: var(--normal-line-height);
}

h1,
h2,
h3 {
  font-weight: var(--title-font-weight);
}

h1 {
  font-size: var(--h1-font-size);
  line-height: var(--h1-line-height);
}

h2 {
  font-size: var(--h2-font-size);
  line-height: var(--h2-line-height);
}

h3 {
  font-size: var(--h3-font-size);
  line-height: var(--h3-line-height);
}

.text-small {
  font-size: var(--small-font-size);
  line-height: var(--small-line-height);
}

.text-smaller {
  font-size: var(--smaller-font-size);
  line-height: var(--smaller-line-height);
}

.app {
  padding: 32px;
  display: flex;
  flex-direction: row;
  gap: 16px;
}
</style>
