import Vue from 'vue'
import Vuex from 'vuex'
import data from '@/api/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bookLists: data
  }

})