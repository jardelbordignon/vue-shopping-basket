import type { MutationTree } from 'vuex'
import type { State, Product, ProductInBag } from './types'

export const mutations: MutationTree<State> = {
  loadProducts(state, products: Product[]) {
    console.log('products', products)
    state.products = products
  },

  loadBag(state, products: ProductInBag[]) {
    state.productsInBag = products
  },

  addToBag(state, product: ProductInBag) {
    state.productsInBag.push(product)
    localStorage.setItem('productsInBag', JSON.stringify(state.productsInBag))
  },

  removeFromBag(state, productId: number) {
    state.productsInBag = state.productsInBag.filter(({ id }) => id !== productId)
    localStorage.setItem('productsInBag', JSON.stringify(state.productsInBag))
  }
}
