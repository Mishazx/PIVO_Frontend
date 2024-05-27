import './App.css';
import Sidebar from './Components/Sidebar/Sidebar'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import MainPage from "./Components/Page/MainPage/MainPage";
import JournalPage from "./Components/Page/JournalPage/JournalPage";
import {useTheme} from "./Providers/ThemeContext";
import EmployeePage from "./Components/Page/EmployeePage/EmployeePage";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./Providers/Reducers/AppReducer";
import {useEffect} from "react";
import TopBar from "./Components/TopBar/TopBar";

const ContainerApp = (props) => {
    const theme = useTheme();

    useEffect(() => {
        if (!props.initialized) {
            props.store.dispatch(props.initializeApp);
        }
    }, [props]);

    return (
        <div className={`App ${theme}`}>

            <BrowserRouter>
                <TopBar />
                {/*<Sidebar/>*/}
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path={'/home'} element={<MainPage />} />
                    <Route path={'/production'} element={<MainPage />} />
                    <Route path={'/journal'} element={<JournalPage />} />
                    <Route path={'/employee'} element={<EmployeePage />} />

                </Routes>


            </BrowserRouter>
        </div>
    );
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
    // error: state.app
});

const mapDispatchToProps = {
    initializeApp
};

const AppContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(ContainerApp);

export default AppContainer;

// export default App;
