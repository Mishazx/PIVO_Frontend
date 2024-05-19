import {compose} from "redux";
import {connect} from "react-redux";
import {requestEvents, setCurrentPage} from "../../../Providers/Reducers/JournalReducer";
import {
    getCurrentPage,
    getEvents,
    getIsFetching,
    getPageSize,
    getTotalEventsCount
} from "../../../Providers/Reducers/JournalSelector";
import {useEffect} from "react";
import JournalLog from "./JournalLog";
import Preloader from "../../Common/Preloader/Preloader";

const JournalLogContainer = (props) => {
    useEffect(() => {
        if(props.events.length === 0)
            props.getEvents();
    }, []);

    return (
        <>
            {props.isFetching ? <Preloader/> : null}
            <JournalLog data={props.events}/>
        </>
    )
}

let mapStateToProps = (state) => {
    return {
        events: getEvents(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalEventsCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
    }
}

export default compose(
    connect(mapStateToProps,
        {
            getEvents: requestEvents
        })
)
(JournalLogContainer)
