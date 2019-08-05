// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
	// console.log(todos);
	return (
		<div className='todo-list'>
			{props.todos.map(todo => {
				// console.log(todo);
				return <Todo todo={todo} key={todo.id} toggleTodo={props.toggleTodo} />;
			})}
			<button className='clear-btn' onClick={props.clearTodo}>
				Clear Todo
			</button>
		</div>
	);
};

export default TodoList;
