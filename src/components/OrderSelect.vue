<template>
  <div class="order-select">
    <div class="order-select__title-container">
      <h1 class="order-select__title">Сортировка</h1>
    </div>
    <div class="order-select__selects">
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
      console.log('change')
      this.$store.commit(mutationTypes.setOrderType, event.target.value)
    },
    setOrder(event) {
      this.$store.commit(mutationTypes.setOrder, event.target.value)
    },
  },
}
</script>
<style scoped>
.order-select {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.order-select__selects {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.order-select__title {
  margin: 0;
}
</style>
