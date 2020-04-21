import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import PrivateRoute from './Components/PrivateRoute'
import FriendsList from './Components/FriendsList'


import Login from './Components/Login'

function App() {
  return (
    <div className="App">
    <h1>Visit your friends</h1>
    <Login></Login>
    </div>
  );
}

export default App;
