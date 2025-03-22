import { INCREMENT, DECREMENT } from "./constant";

const initState = 0;

export default function (preState = initState, action) {
	const { type, data } = action;
	switch (type) {
		// 加
		case INCREMENT:
			return preState + data;
		// 减
		case DECREMENT:
			return preState - data;
		// 默认值
		default:
			return initState;
	}
}
