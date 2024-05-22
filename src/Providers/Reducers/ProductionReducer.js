import {API} from "../../API/API";


const SET_ALL_DATA = 'SET-ALL-DATA';
const SET_STORAGE_DATA = 'SET-STORAGE-DATA';
const SET_PERFORMANCE_DATA = 'SET-PERFORMANCE_DATA';
const TOGGLE_IS_FETCHING_PRODUCTION = 'TOGGLE_IS_FETCHING_PRODUCTION';

// data_storage: [
//     {name: 'Солод', value: 2000},
//     {name: 'Вода', value: 1300},
//     {name: 'Дрожи', value: 1300},
//     {name: 'Хмель', value: 1200},
//     {name: 'Свободно', value: 100},
// ],

let initialState = {
    performance_data: [],
    storage_data: [
    ],
    isFetching: true,
    followingInProgress: []
};


const productionReducer = (state = initialState, action) => {
    switch (action.type) {
        // case SET_ALL_DATA:
        //     return {
        //         ...state,
        //         all_data: action.data
        //     }
        case SET_STORAGE_DATA:
            return {
                ...state,
                storage_data: action.data
            }
        case SET_PERFORMANCE_DATA:
            return {
                ...state,
                performance_data: action.data
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

export const setStorageData = (data) =>
    ({type: SET_STORAGE_DATA, data})

export const setPerformanceData = (data) =>
    ({type: SET_PERFORMANCE_DATA, data})
export const setAllData = (data) =>
    ({type: SET_ALL_DATA, data})

export const toggleIsFetching = (isFetching) =>
    ({type: TOGGLE_IS_FETCHING_PRODUCTION, isFetching})

export const requestProduction = () => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await API.getProduction();
    dispatch(toggleIsFetching(false));
    // dispatch(setAllData(data));
    dispatch(setStorageData(data.storage));
    const unpackedArr = data.performance.map(obj => ({
        ...obj,
        pv: obj.performance[0],
        uv: obj.performance[1],
        hv: obj.performance[2]
    }));
    dispatch(setPerformanceData(unpackedArr))
}


export default productionReducer;
