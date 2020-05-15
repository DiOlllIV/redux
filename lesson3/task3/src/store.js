import { createStore, combineReducers } from 'redux';
import { usersReducer } from './users.reducer';
import { cartReducer } from './cart.reducer';
import {languageReducer} from './language.reducer';

const appReducer = combineReducers({
    language: languageReducer,
    user: usersReducer,
    cart: cartReducer,
});

const store = createStore(
    appReducer
);

export default store;