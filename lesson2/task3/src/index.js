import store from './store';
import {addUser, deleteUser} from './users.actions';

store.dispatch(addUser({name:'Tom', age: 27, id: 11}));
store.dispatch(addUser({name:'Bob', age: 21, id: 12}));
store.dispatch(deleteUser(12));

console.log(store.getState());


