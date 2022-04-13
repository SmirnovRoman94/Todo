import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: [],
    loadMessages: [],
    filter: false
  },
  getters: {
    getMessages(state){
      if(state.filter == false){
        return state.messages
      } 
      return state.loadMessages
    }
  },
  mutations: {
    addMes(state, message){
      state.messages.push(message)

    },
    ActiveMes(state,active ){
      let array  = state.messages
          array = array.filter(function(item){
            if(item.active == active){
              return item
            }
          })
          return state.loadMessages = array
    },
    isActive(state){
      return state.filter = true
    },
    allMes(state){
      return state.filter =false
    },
    deleteMess(state, deleterMes){
      const index = state.messages.findIndex(item => item.id === deleterMes.id)
      if(index !== -1){
         state.messages.splice(index,1)
      }
      return state.messages
    }
  },
  actions: {
    addMessage({commit}, message){
      commit('addMes', message)
    },
    ActiveMessages({commit}, active){
      commit('ActiveMes', active)
      commit('isActive')
    },
    allMesssages({commit}){
      commit('allMes')
    },
    performance({commit}, perform){
      commit('ActiveMes', perform)
      commit('isActive')
    },
    deleteMessage({commit}, deleterMes){
      commit('deleteMess', deleterMes)
    }
  },
  modules: {
  },
  plugins: [
    createPersistedState()
  ]
})
