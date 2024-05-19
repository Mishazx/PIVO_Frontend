
const SET_STORAGE_PIE_DIAGRAM = 'SET-STORAGE-PIE-DIAGRAM';
const TOGGLE_IS_FETCHING_PRODUCTION = 'TOGGLE_IS_FETCHING_PRODUCTION';


let initialState = {
    data_storage_pie_diagram: [
        {name: 'Солод', value: 2000},
        {name: 'Вода', value: 1300},
        {name: 'Дрожи', value: 1300},
        {name: 'Хмель', value: 1200},
        {name: 'Свободно', value: 100},
    ],
    isFetching: true,
    followingInProgress: []
};


const productionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STORAGE_PIE_DIAGRAM:
            return {
                ...state,
                data_storage_pie_diagram: action.data
            }
        case TOGGLE_IS_FETCHING_PRODUCTION:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const setStoragePieDiagram = (data) =>
    ({type: SET_STORAGE_PIE_DIAGRAM, data})

export const toggleIsFetching = (isFetching) =>
    ({type: TOGGLE_IS_FETCHING_PRODUCTION, isFetching})

export const requestProduction = () => async (dispatch) => {
    dispatch(toggleIsFetching(true));

    dispatch(toggleIsFetching(false));

}


export default productionReducer;
