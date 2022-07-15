<template>
  <div class="product">
    <div class="product__delete" @click="onDelete">
      <img src="@/assets/icons/delete.svg" alt="delete" />
    </div>
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
import { mutationTypes } from '@/store/modules/products'

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
  methods: {
    onDelete() {
      this.$store.commit(mutationTypes.removeProduct, this.product.id)
    },
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
  transition: 0.3s;
  position: relative;
}

.product:hover {
  box-shadow: var(--card-shadow-hover);
}

.product__image {
  height: 200px;
  width: 100%;
  background-size: cover;
  background-position: center;
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
}

.product__text {
  padding: 16px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
}

.product__price {
  padding-top: 10px;
  margin-top: auto;
}

.product__delete {
  position: absolute;
  width: 32px;
  height: 32px;
  background-color: var(--red-color);
  border-radius: var(--big-border-radius);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  top: 40px;
  right: 40px;
  opacity: 0;
  transition: 0.2s;
  pointer-events: none;
}

.product:hover .product__delete {
  top: -7px;
  right: -7px;
  opacity: 1;
  pointer-events: initial;
}

@media screen and (max-width: 700px) {
  .product__delete {
    top: -7px;
    right: -7px;
    opacity: 1;
    pointer-events: initial;
  }
}
</style>
