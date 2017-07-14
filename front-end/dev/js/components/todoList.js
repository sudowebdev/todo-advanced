import React from 'react';

import { connect } from 'react-redux';

import { fetchTodo } from '../actions/todoActions';

@connect((state) => {
	return {
		todo: state.todo
	}	
})

export default class TodoList extends React.Component{

	render(){
		console.log(this.props);
		return null;
	}

	componentDidMount(){
		this.props.dispatch(fetchTodo());
	}
}
