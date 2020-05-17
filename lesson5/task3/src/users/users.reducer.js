import { FILTER_TEXT } from './users.actions';
import users from './usersData';

const initialState = {
    usersList: users,
    filterText: '',
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FILTER_TEXT:
            return {
                ...state,
                filterText: action.payload.text,
            }

        default:
            return state;
    }
};

export default reducer;