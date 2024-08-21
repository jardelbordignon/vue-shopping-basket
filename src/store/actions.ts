import type { ActionTree } from 'vuex'
import axios from 'axios'

import type { State } from './types'

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

  addToBag({ commit }, product) {
    commit('addToBag', product)
  }
}
