import { INCREMENT, DECREMENT } from "../constant";

// 加的action
const increment = data => {
	return {
		type: INCREMENT,
		data,
	};
};

// 减的action
const decrement = data => {
	return {
		type: DECREMENT,
		data,
	};
};

// 异步的action
const incrementAsync = (data, time) => {
	return dispatch => {
		setTimeout(() => {
			// 触发同步action
			dispatch(increment(data));
		}, time);
	};
};

export { increment, decrement, incrementAsync };
