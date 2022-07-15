<template>
  <div class="product-list">
    <div class="products">
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
import { mapState } from 'vuex'

export default {
  name: 'AppProductList',
  components: {
    AppProductCard,
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
            if (product1.price === product2.price) return 0
            return product1.price < product2.price ? -1 : 1
          }
        } else {
          if (this.orderType === 'title') {
            return product2.title.localeCompare(product1.title)
          } else {
            if (product2.price === product1.price) return 0
            return product2.price < product1.price ? -1 : 1
          }
        }
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.product-list {
  grid-area: product-list;
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: min-content;
    gap: 20px;

    @media screen and (max-width: 1600px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 1150px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 880px) {
      grid-template-columns: 1fr;
    }

    @media screen and (max-width: 700px) and (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

/* Vue list animations */
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
