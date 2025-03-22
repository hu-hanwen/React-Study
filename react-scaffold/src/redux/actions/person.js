import { ADD_PERSON } from "../constant";

const addPerson = data => {
	return {
		type: ADD_PERSON,
		data,
	};
};

export { addPerson };
