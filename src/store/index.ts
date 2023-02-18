import { createStore } from 'vuex'

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