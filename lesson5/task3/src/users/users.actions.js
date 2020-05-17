export const FILTER_TEXT = 'FILTERED_USERS/FILTERED_TEXT';

export const setFilterText = text => {
    return {
        type: FILTER_TEXT,
        payload: {
            text,
        },
    };
};