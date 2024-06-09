import {API} from "../../API/API";


const SET_EQUIPMENTS_DATA = 'SET-EQUIPMENTS-DATA';
// const SET_STORAGE_DATA = 'SET-STORAGE-DATA';
// const SET_PERFORMANCE_DATA = 'SET-PERFORMANCE_DATA';
// const SET_CHARACTERISTIC_DATA = 'SET-CHARACTERISTIC-DATA'; //Characteristic
const TOGGLE_IS_FETCHING_EQUIPMENTS = 'TOGGLE_IS_FETCHING_EQUIPMENTS';

let initialState = {
    performance_data: [],
    storage_data: [],
    characteristic_data: [],
    isFetching: true,
    followingInProgress: []
};


const equipmentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EQUIPMENTS_DATA:
            return {
                ...state,
                equipment: action.data
            }
        case TOGGLE_IS_FETCHING_EQUIPMENTS:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const setEquipmentData = (data) =>
    ({type: SET_EQUIPMENTS_DATA, data})

export const toggleIsFetching = (isFetching) =>
    ({type: TOGGLE_IS_FETCHING_EQUIPMENTS, isFetching})

export const requestEquipments = () => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await API.getEquipments();
    dispatch(toggleIsFetching(false));
}
export default equipmentsReducer;
