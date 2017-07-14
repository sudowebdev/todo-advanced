import axios from 'axios';

export function fetchTodo(){
	return (dispatch) => {
			
			dispatch({type: 'FETCH_TODO_PENDING', payload: 'In Progress'});

			axios.get('http://localhost:3333/api/todo')
				.then((response) => {
					dispatch({type: 'FETCH_TODO_FULFILLED', payload: response.data})
				})
				.catch((err) => {
					dispatch({type: 'FETCH_TODO_REJECTED', payload: err })
				})


		}
}


export function deleteTodo(id){
	return (dispatch) => {
			
			dispatch({type: 'DELETE_TODO_PENDING', payload: 'In Progress'});

			axios.delete('http://localhost:3333/api/todo/' + id)
				.then((response) => {
					dispatch({type: 'DELETE_TODO_FULFILLED', payload: 'Success'});
					
					axios.get('http://localhost:3333/api/todo')
						.then((response) => {
							dispatch({type: 'FETCH_TODO_FULFILLED', payload: response.data})
						})
						.catch((err) => {
							dispatch({type: 'FETCH_TODO_REJECTED', payload: err })
						})
						
				})
				.catch((err) => {
					dispatch({type: 'DELETE_TODO_REJECTED', payload: err })
				})


		}
}