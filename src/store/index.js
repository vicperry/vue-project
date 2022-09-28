import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    filmes: []
  },
  getters: {
    filmes(state){
      return state.filmes
    }
  },
  mutations: {
    storeFilmes(state, payload){
      state.filmes = payload
    },
    storeFilme(state, payload){
      state.filmes.push(payload)
    }
  },
  actions: {
    getFilmes({commit}){
      return axios.get('http://localhost:3000/filmes')
        .then((response) => {
          commit('storeFilmes', response.data)
        });
    },
    addFilme({commit}, data){
      return axios.post('http://localhost:3000/filmes',  data).then((response) => {
        commit('storeFilme', response.data)
        }
      )
    }
  },
  modules: {
  }
})
