import axios from 'axios';

export function fetchTodo(){
	return (dispatch) => {
			
			dispatch({type: 'FETCH_TODO', payload: '123'});

			dispatch({type: 'FETCH_TODO', payload: '456'});


		}
}