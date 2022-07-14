<template>
  <div class="products">
    <div class="products__order">
      <app-order-select />
    </div>
    <div class="product-list">
      <transition-group name="product-list">
        <app-product-card
          v-for="product of sortedProducts"
          :key="product.id"
          :product="product"
        />
      </transition-group>
    </div>
  </div>
</template>
<script>
import AppProductCard from '@/components/ProductCard.vue'
import AppOrderSelect from '@/components/OrderSelect.vue'
import { mapState } from 'vuex'

export default {
  name: 'AppProductList',
  components: {
    AppProductCard,
    AppOrderSelect,
  },
  computed: {
    ...mapState({
      productList: (state) => state.products.productList,
      orderType: (state) => state.products.orderType,
      order: (state) => state.products.order,
    }),
    sortedProducts() {
      return [...this.productList].sort((product1, product2) => {
        if (this.order === 'ascending') {
          if (this.orderType === 'title') {
            return product1.title.localeCompare(product2.title)
          } else {
            return product1.price < product2.price ? -1 : 1
          }
        } else {
          if (this.orderType === 'title') {
            return product2.title.localeCompare(product1.title)
          } else {
            return product2.price < product1.price ? -1 : 1
          }
        }
      })
    },
  },
}
</script>
<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: min-content;
  gap: 20px;
  padding-top: 20px;
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
