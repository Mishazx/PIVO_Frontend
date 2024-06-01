import ContentContainer from "../../Common/ContentContainer/ContentContainer";
import Container from "../../Common/Container/Container";
import {compose} from "redux";
import {connect} from "react-redux";
import {requestEvents, setCurrentPage} from "../../../Providers/Reducers/JournalReducer";
import {
    getCurrentPage,
    getEvents,
    getIsFetching, getPageSize,
    getTotalEventsCount
} from "../../../Providers/Reducers/JournalSelector";
import Preloader from "../../Common/Preloader/Preloader";
import {useEffect,} from "react";
import JournalLog from "../../Dashboards/JournalLog/JournalLog";
import Journals from "../../Dashboards/JournalLog/Journals";

const JournalPage = (props) => {

    // useEffect(() => {
    //     // props.getEvents();
    //     props.getEvents();
    // }, []);
    //
    // console.log(props);

    return (
        <>
            <ContentContainer>
                <Journals/>

            </ContentContainer>
        </>
    );
}

let mapStateToProps = (state) => {
    return {
        events: getEvents(state),
        isFetching: getIsFetching(state),
    }
}

export default compose(
    connect(mapStateToProps,
        {
        })
)
(JournalPage)

// export default JournalPage;
