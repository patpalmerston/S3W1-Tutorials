import React from 'react';

class TodoFrom extends React.Component {
	constructor() {
		super();
		this.state = {
			text: ''
		};
	}

	// for the onChange
	handleChanges = e => {
		console.log('handleChanges', e);
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	// for the onSubmit
	submitItem = e => {
		console.log('submitItem', e);
		e.preventDefault();
		this.props.addTodo(this.state.text);
		this.setState({ text: '' }); // this clears the input value to be empty after submission
	};

	render() {
		return (
			<>
				<form onSubmit={this.submitItem}>
					<input
						type='text'
						name='text'
						placeholder='todo'
						value={this.text}
						onChange={this.handleChanges}
					/>
					<button type='submit'>Add</button>
				</form>
			</>
		);
	}
}

export default TodoFrom;
