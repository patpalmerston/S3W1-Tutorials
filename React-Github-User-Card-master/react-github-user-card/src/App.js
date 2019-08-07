import React, {Component} from 'react';
import User from './components/User'
import Followers from './components/Followers';
import './App.css';

class App extends Component {

  state = {
    users: [],
    followers: []
  }

  componentDidMount() {
    this.fetchUsers();
    this.fetchFollowers();
    
  }
    
  fetchUsers = () => {
    fetch(`https://api.github.com/users/patpalmerston`)
      .then(res => {
        // console.log(res);
        return res.json();
        
      })
      .then(data => this.setState({
        users: data
      }))
      .catch(err => {
        console.log(err)
      })
      
  }

  fetchFollowers = () => {
    fetch(`https://api.github.com/users/patpalmerston/followers`)
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(data => this.setState({
        followers: data
      }))
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    // console.log('render', this.state.users)
    console.log('render followers', this.state.followers)
    return (
      <div className="App">
        <User user={this.state.users}/>
        <h2>Followers</h2>
        {this.state.followers.map((friend) => (
          <Followers friend={friend} />
        ))}
      </div>
    );
  }

  

}

export default App;
