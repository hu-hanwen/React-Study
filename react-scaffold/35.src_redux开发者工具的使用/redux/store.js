import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import countReducer from "./reducers/count";
import personReducer from "./reducers/person";

/**
 * combineReducers接收一个对象
 * 该对象理解为整个redux的state
 */
const allReducer = combineReducers({
	count: countReducer,
	personList: personReducer,
});

export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)));
