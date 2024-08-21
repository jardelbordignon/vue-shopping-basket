import type { MutationTree } from 'vuex'
import type { State, Product } from './types'

export const mutations: MutationTree<State> = {
  loadProducts(state, products: Product[]) {
    console.log('products', products)
    state.products = products
  }
}
