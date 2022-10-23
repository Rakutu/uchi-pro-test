import { TokensList } from './TokensList';
import { Header } from './Header/Header';


export const Main = (store, actions) => {
  return {
    view: () => (
      <>
        <Header/>
        <div className="container">
          <button
            class="btn btn-primary mb-2"
            onclick={() => m.route.set('/add-token')}
          >
            Add token
          </button>
          <TokensList store={store} actions={actions}/>
        </div>
      </>
    )
  }
}