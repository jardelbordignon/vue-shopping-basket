import type { ActionTree } from 'vuex'
import axios from 'axios'

import type { Product, State } from './types'

export const actions: ActionTree<any, State> = {
  async loadProducts({ commit }) {
    axios
      .get('/products')
      .then(({ data }) => {
        commit('loadProducts', data)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  loadBag({ commit }) {
    const productsInBag = localStorage.getItem('productsInBag')
    if (productsInBag) {
      commit('loadBag', JSON.parse(productsInBag))
    }
  },

  addToBag({ commit }, product: Product) {
    commit('addToBag', product)
  },

  removeFromBag({ commit }, productId: number) {
    if (confirm('Are you sure you want to remove this item from your bag?'))
      commit('removeFromBag', productId)
  }
}
