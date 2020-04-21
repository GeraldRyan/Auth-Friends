import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import PrivateRoute from './Components/PrivateRoute'
import FriendsList from './Components/FriendsList'


import Login from './Components/Login'

function App()
{
  return (
    <Router>
      <div className="App">
        <h1>Visit your friends</h1>
        <Link to="/login">
          <button>Log In</button>
        </Link>
        <br/>
        <br/>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={FriendsList} />

      </div>
    </Router>
  );
}

export default App;
