import { createStore,Store } from 'vuex'

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      $store: Store<any>;
    }
  }

export default createStore({
    state: {
        token: null,
        user: null
    },
    mutations: {
        LOGIN(state, payload) {
            state.user = payload
        }
    },
    actions: {
        login(context, payload) {
            context.commit('LOGIN', payload)
        }
    },
    getters: {
        isLoggedIn: state => !!state.user
    }
})