import React, {Component} from 'react';

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  onSubmit = (e) => {
    e.preventDefualt();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something')
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({text: ''})
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

	render() {
   
		return(
      <div>
        <form onSubmit={this.onSubmit}>
          <input 
            type="text"
            name="text"
            placeholder='Search Followers...'
            value={this.state.text}
            onChange={this.onChange}
          />
        </form>
        
      </div>
    );
	}
}

export default Search;
