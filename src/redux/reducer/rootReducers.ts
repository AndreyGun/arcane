
import { combineReducers } from "redux";
import appReducer from "./appReducer";


const rootReducer = combineReducers({
    users: appReducer
});

export default rootReducer ;