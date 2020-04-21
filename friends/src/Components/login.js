import React from 'react'



export function Login()
{

  const handleClick = () =>
  {

  }


  return (
    <div>
      <div>
        <label htmlFor="login">UserName </label>
        <input type="text" name='login' placeholder="username or email" />
      </div>
      <div>
        <label htmlFor="password">UserName </label>
        <input type="password" name='password' placeholder="enter your password" />
      </div>
      <br/>
      <div>
        <button onClick='handleClick'>Submit!</button>
      </div>
    </div>

  )

}