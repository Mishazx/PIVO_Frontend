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
export const toggleIsFetching = (isFetching) =>
    ({type: TOGGLE_IS_FETCHING_EMPLOYEES, isFetching})

export const requestEmployees = () => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await API.getEmployees();
    const photoPaths = data.map(employee => employee.photo);

    // let photoDataArray = await Promise.all(
    //     photoPaths.map((path) => API.getPhotoEmployee(path))
    // );



    // const newData = {
    //     ...data,
    //
    //     photo: (photoDataArray || []).map((photo, index) => ({
    //         ...photo,
    //         id: data.photo[index].id + 1,
    //     })),
    //
    //     // photo: photoDataArray.map((photo) => ({
    //     //     photo: photo.data,
    //     // })),
    // };


    // const newData = data.map((item, index) => {
    //     const matchingPhoto = photoDataArray[index];
    //     return { ...item, photo: matchingPhoto };
    // });

    // const newData = data.map((item, index) => ({ ...item, photo:
    //
    //
    //         photoDataArray.map((photo) => ({
    //                     // photo: photo.data,
    //                     ...photo,
    //         })),
    // }));


    // data.forEach((item) => {
    //     item.photo = photoDataArray.map((photo) => ({ photo: photo.data })).flat();
    // });


        // { ...data, photo: photoDataArray.map((photo) => photo) };

    // console.log(newData)


    dispatch(toggleIsFetching(false));
    dispatch(setEmployees(data));
};




