import React from 'react';

const Todo = props => {
	// console.log(todo);
	return (
		<div
			className={`todo${props.todo.completed ? ' completed' : ''}`}
			onClick={() => props.toggleTodo(props.todo.id)}
		>
			<p>{props.todo.text}</p>
		</div>
	);
};

export default Todo;
