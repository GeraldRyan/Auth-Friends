import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


export const Navbar = () => {
  return(

    <div>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/protected">Friends List</Link>
        <Link to="/addfriend">Add Friend</Link>


      </nav>
    </div>
  )

}