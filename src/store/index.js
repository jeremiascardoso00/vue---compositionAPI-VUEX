import { createStore } from 'vuex'

export default createStore({
  state: {
    paises: [],
    paisesFiltrados: []
  },
  mutations: {
    setPaises(state, payload){
      state.paises = payload;
      state.paisesFiltrados = payload;
    },
    setPaisesFiltrados(state, payload) {
      state.paisesFiltrados = payload
    }
  },
  actions: {
    async getPaises({commit}){
      try{
        const respuesta = await fetch('https://restcountries.eu/rest/v2/all');
        const paises = await respuesta.json();
        commit('setPaises', paises);
      }catch(error){
        console.log(error)
      }
    },
    filtrarRegion({commit, state}, region){
      if (region === '') {
        commit('setPaisesFiltrados', state.paises);
      }
      else{
        const filtro = state.paises.filter((pais) => {
          return pais.region === region;
        });
        commit('setPaisesFiltrados', filtro)
      }
    },
    filtroNombre({commit, state}, texto){
      const textoCliente = texto.toLowerCase();
      const filtro = state.paises.filter(pais => {
        const textoApi = pais.name.toLowerCase();
        if (textoApi.includes(textoCliente)){
          return pais;
        }
      });
      commit('setPaisesFiltrados', filtro)
    }
  },
  getters: {
    topPaisesPoblacion(state){
      
        return state.paisesFiltrados.sort((a,b) => {
          return a.population < b.population ? 1 : -1
        });
    }
  },
  modules: {
  }
})
