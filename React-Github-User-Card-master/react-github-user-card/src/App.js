import React, {Component} from 'react';
import User from './components/User'
import Followers from './components/Followers';
import Search from './components/Search';
import './App.css';

class App extends Component {

  state = {
    user: {},
    followers: [],
    loading: false,
    alert: null
  }

  componentDidMount() {
    this.fetchUser();
    this.fetchFollowers();
    
  }

  // search the followers
  searchFollowers = async text => {
    this.setState({ loading: true })

    const res = await this.fetchFollowers(`https://api.github.com/users/patpalmerston/followers`)

    this.setState({ followers: res.data, loading: false})
  }
    

  // get the user
  fetchUser = () => {
    fetch(`https://api.github.com/users/patpalmerston`)
      .then(res => {
        // console.log(res);
        return res.json();
        
      })
      .then(data => this.setState({
        user: data
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


  // Set Alert
  setAlert = msg => {
    this.setState({ alert: msg });

    setTimeout(() => this.setState({alert: null}), 1000)
  }

  render() {
    // console.log('render', this.state.users)
    console.log('render followers', this.state.followers)
    return (
      <div className="App">
        <Search 
          searchFollowers={this.searchFollowers}
        
          
          setAlert={this.setAlert}

        />
        <User user={this.state.user}/>
        <h2>Followers</h2>
        {this.state.followers.map((friend) => (
          <Followers friend={friend} />
        ))}
      </div>
    );
  }

  

}

export default App;
