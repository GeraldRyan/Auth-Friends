import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {PrivateRoute} from './Components/PrivateRoute'
import {FriendsList} from './Components/FriendsList'


import Login from './Components/Login'

function App() {
  return (
    <Router>
    <div className="App">
    <h1>Visit your friends</h1>
    <Route path="/login" component={Login}/>
    <PrivateRoute exact path="/protected" component={FriendsList}/>
    <Login></Login>
    </div>
    </Router>
  );
}

export default App;
