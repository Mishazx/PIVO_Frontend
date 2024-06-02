import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import MainPage from "./Components/Page/MainPage/MainPage";
import JournalPage from "./Components/Page/JournalPage/JournalPage";
import {useTheme} from "./Providers/ThemeContext";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./Providers/Reducers/AppReducer";
import {useEffect} from "react";
import TopBar from "./Components/TopBar/TopBar";
import EquipmentPage from "./Components/Page/EquipmentPage/EquipmentPage";
import EmployeesPage from "./Components/Page/EmployeesPage/EmployeesPage";

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
                    <Route path="/" element={<Navigate to="/production" />} />
                    <Route path={'/production'} element={<MainPage />} />
                    <Route path={'/equipment'} element={<EquipmentPage />} />
                    <Route path={'/journal'} element={<JournalPage />} />
                    <Route path={'/employee'} element={<EmployeesPage />} />

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
