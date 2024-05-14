import {eventsAPI} from "../../Components/API/API";

const SET_EVENTS = 'SET-EVENTS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_EVENTS_COUNT = 'SET-TOTAL-EVENTS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState = {
    events: [],
    pageSize: 10,
    totalEventsCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const journalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EVENTS:
            return {
                ...state,
                events: action.events
            }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case SET_TOTAL_EVENTS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state;
    }
}

export const setEvents = (events) =>
    ({type: SET_EVENTS, events})
export const setCurrentPage = (currentPage) =>
    ({type: SET_CURRENT_PAGE, currentPage})
export const setEventsTotalCount = (totalEventsCount) =>
    ({type: SET_TOTAL_EVENTS_COUNT, count: totalEventsCount})
export const toggleIsFetching = (isFetching) =>
    ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, eventId) =>
    ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, eventId})

export const requestEvents = () => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await eventsAPI.getEvents();
    dispatch(toggleIsFetching(false));
    // dispatch(setCurrentPage(page));
    dispatch(setEvents(data));
    // dispatch(setEventsTotalCount(data.totalCount));
};

export default journalReducer;
