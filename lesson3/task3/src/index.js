import store from './store';
import { setUser, removeUser } from './users.actions';
import {addProduct, removeProduct} from './cart.actions';
import { setLanguage } from './language.actions';

store.subscribe(() => console.log(store.getState()));
store.dispatch(addProduct({id: 1, name: 'milk'}));
store.dispatch(setUser({name: 'Tom'}));
store.dispatch(removeProduct(1));
store.dispatch(removeUser());


store.dispatch(setLanguage("jp"));
store.dispatch(setUser({name: 'Susanoo'}));
store.dispatch(addProduct({id: 0, name: 'Ameno habakiri'}));
