import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './todo.css';

const todosData = [
	{
		id: Date.now(),
			text: 'Lets Get Started!',
			completed: false
	}
];

class App extends React.Component {
	// you will need a place to store your state in this component.
	constructor() {
		super();
		this.state = {
			todos: todosData
		};
	}
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	toggleTodo = id => {
		console.log('toggleTodo', id);
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !todo.completed
					};
				} else {
					return todo;
				}
			})
		});
	};

	addTodo = text => {
		console.log('addTodo', text);
		const newTodo = {
			id: Date.now(),
			text: text,
			completed: false
		};
		this.setState({
			todos: [...this.state.todos, newTodo]
		});
	};

	clearTodo = e => {
		console.log('clearTodo', e);
		this.setState({
			todos: this.state.todos.filter(todo => !todo.completed)
		});
	};

	render() {
		return (
			<div className='App'>
				<div className='header'>
					<h1>Todo List</h1>
					<TodoForm addTodo={this.addTodo} />
				</div>
				<TodoList
					todos={this.state.todos}
					clearTodo={this.clearTodo}
					toggleTodo={this.toggleTodo}
				/>
			</div>
		);
	}
}

export default App;
