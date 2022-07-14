const productList = []
for (let i = 0; i < 6; i++) {
  productList.push({
    id: i,
    imgUrl: require('../../assets/base_image.png'),
    title: 'Наименование товара',
    description:
      'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
    price: 10000,
  })
}

const state = { productList }

export const mutationTypes = {
  addProduct: '[PRODUCTS] ADD PRODUCT',
  removeProduct: '[PRODUCTS] REMOVE PRODUCT',
}

const mutations = {
  [mutationTypes.addProduct](state, { imgUrl, title, description, price }) {
    if (!imgUrl || !title || !description || !price) return
    const id =
      state.productList.length > 0
        ? Math.max(
            state.productList[state.productList.length - 1].id,
            state.productList[0].id
          ) + 1
        : 0
    const product = { id, imgUrl, title, description, price }
    state.productList.unshift(product)
  },

  [mutationTypes.removeProduct](state, id) {
    if (!id) return
    state.productList = state.productList.filter((product) => product.id !== id)
  },
}

export default { state, mutations }
