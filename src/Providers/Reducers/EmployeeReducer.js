import {API} from "../../API/API";

const SET_EMPLOYEES = 'SET-EMPLOYEES';
const TOGGLE_IS_FETCHING_EMPLOYEES = 'TOGGLE-IS-FETCHING-EMPLOYEES';

let initialState = {
    employees: [],
    isFetching: true,
};

const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EMPLOYEES:
            return {
                ...state,
                employees: action.employees
            }
        case TOGGLE_IS_FETCHING_EMPLOYEES: 
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export default employeeReducer;

export const setEmployees = (employees) =>
    ({type: SET_EMPLOYEES, employees})
// export const setCurrentPage = (currentPage) =>
//     ({type: SET_CURRENT_PAGE, currentPage})
export const toggleIsFetching = (isFetching) =>
    ({type: TOGGLE_IS_FETCHING_EMPLOYEES, isFetching})

export const requestEmployees = () => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await API.getEmployees();
    dispatch(toggleIsFetching(false));
    console.log(data);
    dispatch(setEmployees(data));
};




