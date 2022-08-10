const defaultState = {
	horseData: [],
};

const ADD_HORSE_DATA = "ADD_HORSE_DATA";

export const horseDataReducer = (state = defaultState, action) => {
	switch (action.type) {

		case ADD_HORSE_DATA:
			return {...state, horseData: [...action.payload]};

		default:
			return state;
	}
};

export const addHorseDataAction = (payload) => ({type: ADD_HORSE_DATA, payload});