import {getCards} from "../api";

export const cardsAction = (cards = []) => {
  return async (dispatch) => {
    dispatch({
      type: 'LOADING_ACTION'
    });

    try {
    	if (!cards.length) {
				const data = await getCards();
				dispatch({
					type: 'GET_CARDS_ACTION',
					payload: [
						...data,
					]
				});
			}
		} catch (err) {
    	console.error(err);
		}
  };
};
