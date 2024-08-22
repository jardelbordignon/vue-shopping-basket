import { createLogger, createStore, Store as VuexStore } from 'vuex'
import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
import type { State } from './types'

const store = createStore<State>({
  strict: true,
  plugins: import.meta.env.VITE_APP_ENV === 'development' ? [createLogger()] : [],
  state: {
    products: [],
    productsInBag: []
  },
  getters,
  mutations,
  actions
})

export function useStore(): VuexStore<State> {
  return store as VuexStore<State>
}

export default store
