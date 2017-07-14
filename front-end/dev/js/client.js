import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';

import TodoList from './components/todoList';

import store from './store';

const node = document.getElementById('root');

ReactDOM.render(
	<Provider store={store}>
		<TodoList />
	</Provider>, node);