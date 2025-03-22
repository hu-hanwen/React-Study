import { ADD_PERSON } from "../constant";

const initState = [];
const personReducer = (preState = initState, action) => {
	const { type, data } = action;
	switch (type) {
		case ADD_PERSON:
			/**
			 * preState.unshift(data);
				 return preState;
				 上面写法是不可以的，因为redux要求reducer函数必须是一个纯函数
				 纯函数：同样的输入(入参)，必定得到同样的输出(返回)
			 */
			return [data, ...preState];

		default:
			return preState;
	}
};

export default personReducer;
