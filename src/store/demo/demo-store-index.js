import Vue from 'vue'
import Vuex from 'vuex'
import actions from './demo-actions'
import * as getters from './demo-getters'
import demoState from './demo-state'
Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
    actions: actions, getters,
    modules: {
        demoState
    }
});
