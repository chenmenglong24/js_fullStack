import Vue from 'vue'
import Vuex from 'vuex'
import data from '@/api/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bookLists: data,
    searchHistory: [],
    mySubscribe: [],
    myCollect: [],
    myDownload: []
  },
  actions: {
    saveHistory ({ commit }, searchKey) {
      commit('SaveHistory', searchKey)
    },
    deleteHistory ({ commit }, index) {
      commit('DeleteHistory', index)
    },
    deleteAllHistory ({ commit }) {
      commit('DeleteAllHistory')
    },
    addMySubscribe ({ commit }, id) {
      commit('AddMySubscribe', id)
    },
    delMySubscribe ({ commit }, index) {
      commit('DelMySubscribe', index)
    }
  },
  mutations: {
    SaveHistory (state, searchKey) {
      let index = state.searchHistory.indexOf(searchKey);
      // console.log(index)
      if (index !== -1) {
        state.searchHistory.splice(index, 1)
      }
      state.searchHistory.push(searchKey)
      // console.log(state.searchHistory)
    },
    DeleteHistory (state, index) {
      let len = state.searchHistory.length;
      state.searchHistory.splice(len - 1 - index, 1);
    },
    DeleteAllHistory (state) {
      state.searchHistory.splice(0);
    },
    AddMySubscribe (state, id) {
      let exist = state.mySubscribe.some((item) => {
        return id == item.id
      })

      if (exist) {
        // console.log(state.mySubscribe);
        return
      } else {
        state.mySubscribe.push(state.bookLists[id])
      }
    },
    DelMySubscribe (state, index) {
      state.mySubscribe.splice(index, 1)
    }
  }
})