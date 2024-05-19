import {createSelector} from "reselect";


export const getEventsSelector = (state) => {
    return state.journal.events;
}

export const getEvents = createSelector(
    getEventsSelector, (events) => {
        // return events.filter(e => true);
        return events.filter(e => true);
    });



export const getPageSize = (state) => {
    return state.journal.pageSize;
}

export const getTotalEventsCount = (state) => {
    return state.journal.totalEventsCount;
}

export const getCurrentPage = (state) => {
    return state.journal.currentPage;
}

export const getIsFetching = (state) => {
    return state.journal.isFetching;
}



