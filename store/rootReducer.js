import { combineReducers } from "redux";
import tabReducer from "./tabs/tabReducers";

const rootReducer = combineReducers({
  tabReducer,
});

export default rootReducer;
