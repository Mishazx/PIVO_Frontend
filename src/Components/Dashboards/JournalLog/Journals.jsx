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
import Container from "../../Common/Container/Container";
import Text from "../../Common/Text/Text";

const Journals = (props) => {
    useEffect(() => {
        if (props.events.length === 0)
            props.getEvents();
    }, []);

    return (
        <>
            {props.isFetching ? <Preloader/> : null}
            {!props.isFetching ?
                <>
                    <Container>
                        <Text style={{
                            padding: '20px',
                            fontSize: '20px'
                        }}>Журналы линий производств</Text>
                        <JournalLog data={props.events}/>
                    </Container>
                    {/*<Container>*/}
                    {/*    ads*/}
                    {/*</Container>*/}
                </>
                :
                null
            }
        </>
    )
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
            getEvents: requestEvents
        })
)
(Journals)
