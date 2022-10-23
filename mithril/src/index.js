import { AddToken } from "./components/AddToken";
import { DeleteToken } from "./components/DeleteToken";
import { Main } from './components/Main';
import { Actions, Store } from './Store/store';

const store = Store();
const actions = Actions(store);

const app = document.getElementById('app');

m.route(app, '/', {
  '/': Main(store, actions),
  '/add-token': AddToken(actions),
  '/token/:id/delete': DeleteToken(actions),
})