import { combineReducers } from "redux";
import count from "./reducers/count";
import personList from "./reducers/person";

export default combineReducers({
	count,
	personList,
});
