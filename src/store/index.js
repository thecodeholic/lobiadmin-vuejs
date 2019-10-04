import Vuex from "vuex";
import Vue from 'vue';

// Load vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  state: {
    count: 0,
    menuCollapsed: false
  },
  actions: {
    toggleMenuCollapse({commit, state}){
      console.log(state);
      commit('toggleMenuCollapse', !state.menuCollapsed);
    }
  },
  mutations: {
    toggleMenuCollapse: (state, collapsed) => state.menuCollapsed = collapsed
  }
});
