const renderToken = ({ id, domain, token }) => (
  <tr>
    <td>{id}</td>
    <td>{domain}</td>
    <td>{token}</td>
    <td>
      <button
        class="btn btn-danger"
        onclick={() => m.route.set(`/token/${id}/delete?domain=${domain}`)}
      >
        delete
      </button>
    </td>
  </tr>
)

export const TokensList = ({ attrs }) => {
  const { store, actions } = attrs;

  return {
    tokens: [],
    oninit: async ({ state }) => {
      await actions.fetchTokens();

      state.tokens = store.tokens;
    },
    view: ({ state: { tokens } }) => (
      <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Domain</th>
            <th>Token</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map(renderToken)}
        </tbody>
      </table>
    )
  }
}