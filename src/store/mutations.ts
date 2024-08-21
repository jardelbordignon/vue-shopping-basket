import type { MutationTree } from 'vuex'
import type { State, Product } from './types'

export const mutations: MutationTree<State> = {
  loadProducts(state, products: Product[]) {
    console.log('products', products)
    state.products = products
  },

  addToBag(state, product: Product) {
    state.productsInBag.push(product)
  },

  removeFromBag(state, productId: number) {
    state.productsInBag = state.productsInBag.filter(({ id }) => id !== productId)
  }
}
