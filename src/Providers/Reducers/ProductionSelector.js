
export const getAllData = (state) => {
    return state.production.all_data;
}

export const getStorageData = (state) => {
    return state.production.storage_data;
}

export const getPerformanceData = (state) => {
    return state.production.performance_data;
}

export const getIsFetching = (state) => {
    return state.production.isFetching;
}
