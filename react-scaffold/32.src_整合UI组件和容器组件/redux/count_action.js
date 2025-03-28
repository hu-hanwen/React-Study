import { INCREMENT, DECREMENT } from "./constant";

export const incrementAction = data => {
	return { type: INCREMENT, data };
};

export const decrementAction = data => {
	return { type: DECREMENT, data };
};

export const incrementAsync = (data, time) => {
	return dispatch => {
		setTimeout(() => {
			dispatch(incrementAction(data));
		}, time);
	};
};
