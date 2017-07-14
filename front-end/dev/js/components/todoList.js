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
		<div>
			<h2>To-Do</h2>
			<ul>
				{
					this.props.todo.data.map(function(todo){
						return (
						<div key={todo.id}>
							<li>
								<span onClick={this.deleteTodo.bind(this, todo.id)}>{todo.title}</span>
								<button onClick={this.editTodo.bind(this, todo.id)}>Edit</button>
								<input placeholder="Type the new value of todo" style={ { 'display': 'none' } } ref="newtodo" />
							</li>
							
									
						</div>
						);
					}.bind(this))
				}
			</ul>
		</div>		
		);
	}

	componentDidMount(){
		this.props.dispatch(fetchTodo());
	}

	deleteTodo(id){
		console.log(id);
		this.props.dispatch(deleteTodo(id));
	}

	editTodo(id){
		console.log(id);
		console.log(this.refs.newtodo);
		this.refs.newtodo.style.display = 'inline-block';
	}
}
