import {getCards, getRandomCard} from "../api";

export const cardRandomAction = () => {
	return async (dispatch) => {
		dispatch({
			type: 'LOADING_ACTION'
		});

		try {
			const data = await getRandomCard();
			dispatch({
				type: 'GET_CARD_RANDOM_ACTION',
				payload: {
					...data,
				}
			});
		} catch (err) {
			console.error(err);
		}
	};
};
