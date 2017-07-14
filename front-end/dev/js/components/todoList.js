import React from 'react';

import { connect } from 'react-redux';

import { fetchTodo, deleteTodo } from '../actions/todoActions';

@connect((state) => {
	return {
		todo: state.todo
	}	
})

export default class TodoList extends React.Component{

	render(){
		console.log(this.props);
		return (
		<ul> 
			{
				this.props.todo.data.map(function(todo){
					return (<li key={todo.id} onClick={this.deleteTodo.bind(this, todo.id)}>{todo.title}</li>)
				}.bind(this))
			}
		</ul>	
		);
	}

	componentDidMount(){
		this.props.dispatch(fetchTodo());
	}

	deleteTodo(id){
		console.log(id);
		this.props.dispatch(deleteTodo(id));
	}
}
