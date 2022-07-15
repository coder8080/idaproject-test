<template>
  <div class="product">
    <div class="delete" @click="onDelete">
      <img src="@/assets/icons/delete.svg" alt="delete" />
    </div>
    <div
      class="image"
      :style="{ backgroundImage: `url('${product.imgUrl}')` }"
    />
    <div class="text">
      <h3 class="title">{{ product.title }}</h3>
      <p class="description">{{ product.description }}</p>
      <h2 class="price">{{ formatNumber(product.price) }}&nbsp;руб.</h2>
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
<style lang="scss" scoped>
.product {
  width: 100%;
  background-color: $container-color;
  box-shadow: $card-shadow;
  border-radius: $border-radius;
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  position: relative;

  &:hover {
    box-shadow: $card-shadow-hover;
  }

  .image {
    height: 200px;
    width: 100%;
    background-size: cover;
    background-position: center;
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
  }

  .text {
    padding: 16px;
    padding-bottom: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex: 1;

    .price {
      padding-top: 10px;
      margin-top: auto;
    }
  }

  .delete {
    position: absolute;
    width: 32px;
    height: 32px;
    background-color: $red-color;
    border-radius: $big-border-radius;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    top: 40px;
    right: 40px;
    opacity: 0;
    transition: 0.2s;
    pointer-events: none;

    @media screen and (max-width: 700px) {
      top: -7px;
      right: -7px;
      opacity: 1;
      pointer-events: initial;
    }
  }

  &:hover .delete {
    top: -7px;
    right: -7px;
    opacity: 1;
    pointer-events: initial;
  }
}
</style>
