import { combineReducers } from "redux";
import doctorFilterReducer from "./reducers/doctorFilterReducer";


const rootReducer = combineReducers({

  doctorFilter:doctorFilterReducer,
});

const store = createStore(rootReducer);

export default store;
