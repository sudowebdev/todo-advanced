const todoReducer = (state = {
	data: [],
	statusText: 'Not started'
}, action) => {
	switch(action.type){


		case 'FETCH_TODO_PENDING': {
			state = {...state, statusText: action.payload};
			break;
		}
		case 'FETCH_TODO_FULFILLED': {
			state = {...state, data: action.payload};
			break;
		}
		case 'FETCH_TODO_REJECTED': {
			state = {...state, statusText: action.payload};
			break;
		}
	}

	return state;
}

export default todoReducer;