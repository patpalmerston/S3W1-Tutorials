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
	};

	// for the onSubmit
	submitItem = e => {
		console.log('submitItem', e);
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
					<button>Add</button>
				</form>
			</>
		);
	}
}

export default TodoFrom;
