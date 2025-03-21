/**
 * 该文件用来专门放置 actionCreator
 */

import { INCREMENT, DECREMENT } from "./constant";

// 加的action
export const increment = data => ({ type: INCREMENT, data });
// 减的action
export const decrement = data => ({ type: DECREMENT, data });

/**
 * 同步action：action返回对象
 * 异步action：action返回函数
 */
export const incrementAsync = (data, timeout) => {
	// 异步action需要返回一个函数，该函数会接收到 dispatch 方法
	return dispatch => {
		setTimeout(() => {
			dispatch(increment(data));
		}, timeout);
	};
};
