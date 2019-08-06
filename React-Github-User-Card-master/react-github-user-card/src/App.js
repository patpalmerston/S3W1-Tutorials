import React from 'react';
import UsersList from './components/UsersList'

import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }


  render() {
    return(
       <div className='App'>
         App Component
         <UsersList />
         </div>

    );
  }
}

export default App;
