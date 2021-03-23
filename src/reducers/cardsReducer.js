const initialState = {
	loading: false,
	cards: [],
	cardRandom: undefined
};

const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'LOADING_ACTION':
			return {
				...state,
				loading: true
			};
		case 'GET_CARDS_ACTION':
			return {
				...state,
				loading: false,
				cards: [...action.payload]
			};
		case 'GET_CARD_RANDOM_ACTION':
			return {
				...state,
				loading: false,
				cardRandom: {
					...action.payload
				}
			};
		case 'NOT_FOUND':
			return {
				...state,
				cardRandom: {},
				loading: false
			};

		default:
			return state
	}
};

export default reducer;
