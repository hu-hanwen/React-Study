import { INCREMENT, DECREMENT } from "./constant";

const initState = 0;

export default function countReducer(preState = initState, action) {
	// console.log("preState", preState);
	// console.log("action", action);
	const { type, data } = action;
	switch (type) {
		case INCREMENT:
			return preState + data;

		case DECREMENT:
			return preState - data;

		default:
			return initState;
	}
}
