export const Store = () => ({
  tokens: [],
})

export const Actions = store => ({
  fetchTokens: async () => {
    try {
      const tokens = await m.request({
        method: 'GET',
        url: 'http://localhost:3000/tokens',
      });

      store.tokens = tokens.data;
    } catch (error) {
      throw error;
    }
  },
  addToken: async (domain) => {
    try {
      const token = await m.request({
        method: 'POST',
        url: 'http://localhost:3000/add-token',
        body: {
          domain,
        }
      });

      store.tokens = [ ...store.tokens, token ];

      return token;
    } catch (error) {
      throw error;
    }
  },
  deleteToken: async (id) => {
    try {
      await m.request({
        method: 'DELETE',
        url: `http://localhost:3000/token/${id}/delete`,
      });

      store.tokens = store.tokens.filter(({ id: tokenID }) => tokenID !== Number(id));
    } catch (error) {
      throw error;
    }
  },
})