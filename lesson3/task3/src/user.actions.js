export const SET = 'USERS/SET';
export const REMOVE = 'USERS/REMOVE';

export const setUser = (userData) => {
    return {
        type: SET,
        payload: {
            userData,
        },
    };
};

export const removeUser = () => {
    return {
        type: REMOVE,
    };
};
