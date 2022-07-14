<template>
  <div class="product">
    <div
      class="product__image"
      :style="{ backgroundImage: `url('${product.imgUrl}')` }"
    />
    <div class="product__text">
      <h3 class="product__title">{{ product.title }}</h3>
      <p class="product__description">{{ product.description }}</p>
      <h2 class="product__price">
        {{ formatNumber(product.price) }}&nbsp;руб.
      </h2>
    </div>
  </div>
</template>
<script>
import formatNumber from '@/utilities/formatNumber'

export default {
  name: 'AppProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      formatNumber,
    }
  },
}
</script>
<style scoped>
.product {
  width: 100%;
  background-color: var(--container-color);
  box-shadow: var(--card-shadow);
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: 0.3s;
}

.product:hover {
  box-shadow: var(--card-shadow-hover);
}

.product__image {
  height: 200px;
  width: 100%;
  background-size: cover;
  background-position: center;
}

.product__text {
  padding: 16px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.product__price {
  margin-top: 10px;
}
</style>
