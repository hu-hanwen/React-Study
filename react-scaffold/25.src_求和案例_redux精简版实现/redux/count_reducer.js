const initState = 0;

export default function countReducer(preState = initState, action) {
	// console.log("preState", preState);
	// console.log("action", action);
	const { type, data } = action;
	switch (type) {
		case "increment":
			return preState + data;

		case "decrement":
			return preState - data;

		default:
			return initState;
	}
}
