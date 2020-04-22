import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import PrivateRoute from './Components/PrivateRoute'
import FriendsList from './Components/FriendsList'
import {Navbar} from './Components/Navbar'
import AddFriend from './Components/AddFriend'

import Login from './Components/Login'

function App()
{
  return (
    <Router>
      <div className="App">
        <Navbar />
        <h1>Visit your friends</h1>
        <Link to="/login">
          <button>Log In</button>
        </Link>
        <br/>
        <br/>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={FriendsList} />
        <PrivateRoute exact path='/addfriend' component={AddFriend} />

      </div>
    </Router>
  );
}

export default App;
