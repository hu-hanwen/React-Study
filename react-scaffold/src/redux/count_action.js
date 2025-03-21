/**
 * 该文件用来专门放置 actionCreator
 */

import { INCREMENT, DECREMENT } from "./constant";

// 加的action
export const increment = data => ({ type: INCREMENT, data });
// 减的action
export const decrement = data => ({ type: DECREMENT, data });
