import {applyMiddleware, combineReducers, createStore} from "redux";
import { Provider } from 'react-redux';
import {thunk} from "redux-thunk";
import appReducer from "./Reducers/AppReducer";
import journalReducer from "./Reducers/JournalReducer"
import productionReducer from "./Reducers/ProductionReducer";
import employeeReducer from "./Reducers/EmployeeReducer";
import equipmentReducer from "./Reducers/EquipmentReducer";


let reducers = combineReducers({
    app: appReducer,
    journal: journalReducer,
    production: productionReducer,
    employee: employeeReducer,
    equipment: equipmentReducer
});

export let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;
// export default store;

export default function ReduxProvider({ children }) {
    return <Provider store={store}>{children}</Provider>;
}
