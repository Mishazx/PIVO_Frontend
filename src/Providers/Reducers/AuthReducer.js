// Файл ./providers/Reducers/AuthReducer.js

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_DATA_ERROR = 'SET_USER_DATA_ERROR';

export const getAuthUserData = () => async (dispatch) => {
    try {
        // Имитируем получение данных пользователя
        const userData = {
            userId: 1,
            username: 'John Doe',
            email: 'john.doe@example.com',
        };

        dispatch(setUserData(userData));
        // console.log('userData:', userData);
        return userData;
    } catch (error) {
        dispatch(setUserDataError(error));
        // console.log('getAuthUserData:', error);
        throw error;
    }
};


export const setUserData = (userData) => ({
    type: SET_USER_DATA,
    payload: userData,
});


export const setUserDataError = (error) => ({
    type: SET_USER_DATA_ERROR,
    payload: error,
});
