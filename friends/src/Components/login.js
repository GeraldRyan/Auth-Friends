import React from 'react'
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux'
import {login} from '../Actions/index'

class Login extends React.Component
{
  state = {
    credentials: {
      username: '',
      password: ''
    }
  }

  handleChange = e =>
  {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }


  login = (e) =>
  {
    e.preventDefault();
    this.props
    .login(this.state.credentials)
    .then(() => this.props.history.push('/protected'))
  }

  render()
  {
    return (
      <div>
        <form onSubmit={this.login}>
          <div>
            <label htmlFor="login">UserName </label>
            <input type="text" name='login' placeholder="username or email" />
          </div>
          <div>
            <label htmlFor="password">UserName </label>
            <input type="password" name='password' placeholder="enter your password" />
          </div>
          <br />
          <div>
            <button onClick='login'>Submit!</button>
          </div>
        </form>
      </div >
    )
  }
}

const mapStateToProps = ({error, loggingIn}) => ({
  error,
  loggingIn
})

export default connect(mapStateToProps, {login})(Login)