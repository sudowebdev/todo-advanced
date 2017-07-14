const todoReducer = (state = [], action) => {
	switch(action.type){


		case 'FETCH_TODO': {
			state = [...state, action.payload];
			break;
		}
	}

	return state;
}

export default todoReducer;