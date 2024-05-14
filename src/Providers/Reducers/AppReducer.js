import {getAuthUserData} from "./AuthReducer";


const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS'
const INITIALIZATION_START = 'INITIALIZATION_START';
const INITIALIZATION_SUCCESS = 'INITIALIZATION_SUCCESS';
const INITIALIZATION_FAILURE = 'INITIALIZATION_FAILURE';
const SET_TAB_BAR_ROUTE = 'SET-TAB_BAR-ROUTE'

let initialState = {
    initialized: false,
    error: null,
}

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };
        case INITIALIZATION_START:
            return {
                ...state,
                initialized: false,
                error: null,
            };
        case INITIALIZATION_SUCCESS:
            return {
                ...state,
                initialized: true,
                error: null,
            };
        case INITIALIZATION_FAILURE:
            return {
                ...state,
                initialized: false,
                error: action.payload,
            };
        case SET_TAB_BAR_ROUTE:
            return {
                ...state,
                route: action.route,
            };
        default:
            return state;
    }
};



export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

// export const initializeApp = () => (dispatch) => {
//     let promise = dispatch(getAuthUserData());
//     promise.then(() => {
//         dispatch(initializedSuccess());
//     });
// }

export const initializeApp = () => (dispatch) => {
    dispatch(initializationStart());

    return dispatch(getAuthUserData())
        .then(() => {
            dispatch(initializationSuccess());
        })
        .catch((error) => {
            dispatch(initializationFailure(error));
        });
};


export const initializationStart = () => ({
    type: INITIALIZATION_START,
});


export const initializationSuccess = () => ({
    type: INITIALIZATION_SUCCESS,
});


export const initializationFailure = (error) => ({
    type: INITIALIZATION_FAILURE,
    payload: error,
});


// export const setTabBarRoute = (route) => ({type: SET_TAB_BAR_ROUTE, route})
//
// export const getTabBarRoute = () => (dispatch, getState) => {
//     return getState().app.route;
// }
//
//

export default AppReducer;
