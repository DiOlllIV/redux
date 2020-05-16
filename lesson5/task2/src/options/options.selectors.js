import { createSelector } from 'reselect';

const optionsListSelector = state => {
    return state.options.optionsList;
};

const selectedIdsSelector = state => {
    return state.options.selected;
};

export const selectedOptionsSelector = createSelector(
    [optionsListSelector, selectedIdsSelector],
    (allOptionsList, selectedIds) => {
        return allOptionsList.filter(option => selectedIds.includes(option.id));
    },
);

export const availableOptionsSelector = state => {
    const allOptionsList = optionsListSelector(state);
    const selectedIds = selectedIdsSelector(state);

    return allOptionsList.filter(option => !selectedIds.includes(option.id));
};