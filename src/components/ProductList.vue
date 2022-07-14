<template>
  <div class="product-list">
    <app-product-card
      v-for="product of productList"
      :key="product.id"
      :product="product"
    />
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
</style>
