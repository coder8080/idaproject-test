<template>
  <div class="order-select">
    <div class="title-container">
      <h1 class="title">Сортировка</h1>
    </div>
    <div class="selects">
      <app-select
        :options="[
          { text: 'По цене', value: 'price' },
          { text: 'По названию', value: 'title' },
        ]"
        @change="setOrderType"
      />
      <app-select
        :options="[
          { text: 'По возрастанию', value: 'ascending' },
          { text: 'По убыванию', value: 'descending' },
        ]"
        @change="setOrder"
      />
    </div>
    <app-icon-button
      class="add-product-btn"
      @click="togglePopup"
      :iconUrl="require('../assets/icons/add-circle-line.svg')"
    />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { mutationTypes } from '@/store/modules/products'

export default {
  name: 'AppOrderSelect',
  computed: {
    ...mapState({
      orderType: (state) => state.products.orderType,
      order: (state) => state.products.order,
    }),
  },
  methods: {
    setOrderType(event) {
      this.$store.commit(mutationTypes.setOrderType, event.target.value)
    },
    setOrder(event) {
      this.$store.commit(mutationTypes.setOrder, event.target.value)
    },
    togglePopup() {
      this.$store.commit(mutationTypes.togglePopup)
    },
  },
}
</script>
<style lang="scss" scoped>
.order-select {
  display: flex;
  flex-direction: column;
  gap: 16px;
  grid-area: order-select;

  .selects {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  .title-container .title {
    margin: 0;
  }

  @media screen and (min-width: 701px) {
    .add-product-btn {
      display: none !important;
    }
  }

  @media screen and (max-width: 700px) {
    flex-direction: row;
    align-items: center;
    .selects {
      flex-direction: column;
      gap: 10px;
      flex: 1;
    }

    .title-container {
      display: none;
    }
  }
}
</style>
