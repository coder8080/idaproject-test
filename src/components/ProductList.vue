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
  gap: 20px;
  padding-top: 51px;
}

.product-list-enter-active,
.product-list-leave-active {
  transition: 0.5s ease;
}

.product-list-enter-from,
.product-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.product-list-move {
  transition: 0.5s ease;
}
</style>
