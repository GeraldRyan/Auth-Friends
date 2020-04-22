import React from 'react'
import { connect } from 'react-redux'

class AddFriend extends React.Component
{
  state = {
    friend: {
      id: '',
      name: '',
      age: 1,
      email: ''
    }
  }
render(){
  return(
    <div>Hello world</div>
  )
}

}

const mapStateToProps = ({error, loggingIn}) => ({
  error,
  loggingIn
})

export default connect(mapStateToProps, {})(AddFriend)
