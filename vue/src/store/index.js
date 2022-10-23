import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: () => ({
    tokens: [],
    domain: '',
  }),
  getters: {
    tokens: state => state.tokens,
    domain: state => state.domain,
  },
  mutations: {
    setTokens(state, tokens) {
      state.tokens = tokens;
    },
    updateDomain(state, value) {
      state.domain = value;
    },
  },
  actions: {
    async fetchTokens({ commit }) {
      const data = await axios.get('http://localhost:3000/tokens');

      commit('setTokens', data.data.data);
    },
    async addToken({ state, commit }) {
      const newToken = await axios.post('http://localhost:3000/add-token', {
        domain: state.domain,
      });

      if (newToken.status === 200) {
        commit('setTokens', [...state.tokens, newToken.data ]);
        commit('updateDomain', '');
      }

      return newToken.status;
    },
    async deleteToken({ state, commit }, id) {
      const response = await axios.delete(`http://localhost:3000/token/${id}/delete`);

      if (response.status === 200) {
        const filteredTokens = state.tokens.filter(({ id: tokenId }) => tokenId !== id);

        commit('setTokens', filteredTokens);
      }

      return response.status;
    }
  },
})