<template>
  <div class="product-list">
    <transition-group name="product-list">
      <app-product-card
        v-for="product of productList"
        :key="product.id"
        :product="product"
      />
    </transition-group>
  </div>
</template>
<script>
import AppProductCard from '@/components/ProductCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'AppProductList',
  components: {
    AppProductCard,
  },
  computed: {
    ...mapState({
      productList: (state) => state.products.productList,
    }),
  },
}
</script>
<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: min-content;
  gap: 20px;
  padding-top: 51px;
}

.product-list-enter-active {
  transition: 0.5s ease;
}

.product-list-leave-active {
  transition: 0.3s ease;
  position: absolute;
  max-width: calc((100vw - 64px - (20px * 2) - 16px - 332px) / 3);
}

.product-list-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.product-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.product-list-move:not(.product-list-leave-active) {
  transition: all 0.5s ease;
}
</style>
