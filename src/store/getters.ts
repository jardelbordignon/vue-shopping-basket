import type { GetterTree } from 'vuex'

import type { State } from './types'

export const getters: GetterTree<any, State> = {
  products: (state) => state.products
} 