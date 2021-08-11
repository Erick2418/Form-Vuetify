import Vue from 'vue'
import Vuex from 'vuex'
import usuario from './modules/usuario'
import tareas from './modules/tareas'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
  },
  mutations: {
     
  },
  actions: {

  },
  modules: {
    tareas,
    usuario
  }
})
