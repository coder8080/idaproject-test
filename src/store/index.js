import { createStore } from 'vuex'
import VuexPersister from 'vuex-persister'
import products from './modules/products'

const vuexPersister = new VuexPersister({})
const store = createStore({
  modules: { products },
  plugins: [vuexPersister.persist],
})
export default store
