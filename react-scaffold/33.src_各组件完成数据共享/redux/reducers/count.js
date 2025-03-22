import { INCREMENT, DECREMENT } from "../constant";

const initState = 0;
const countReducer = (preState = initState, action) => {
	const { type, data } = action;
	switch (type) {
		// 加
		case INCREMENT:
			return preState + data;
		// 减
		case DECREMENT:
			return preState - data;
		default:
			return preState;
	}
};

export default countReducer;
