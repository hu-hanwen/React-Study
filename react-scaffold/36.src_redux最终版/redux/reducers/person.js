import { ADD_PERSON } from "../constant";

const initState = [];

const personReducer = (preState = initState, action) => {
	const { type, data } = action;
	switch (type) {
		case ADD_PERSON:
			return [data, ...preState];

		default:
			return preState;
	}
};

export default personReducer;
