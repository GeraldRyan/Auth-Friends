import React from 'react'
import { connect } from 'react-redux'

class AddFriend extends React.Component
{
  constructor()
  {
    super()
    this.state = {
      friendToAdd: {
        id: '',
        name: '',
        age: 1,
        email: ''
      }
    }
  }


  handleChange = (e) =>
  {
    this.setState({
      friendToAdd: {
        ...this.state.friendToAdd,
        [e.target.name]: e.target.value
      }

    })
  }

  render()
  {
    return (
      <div>Add Friend
        <form action="">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" onChange={this.handleChange} value={this.state.friendToAdd.name} />
          </div>
          <div>
            <label htmlFor="age">age</label>
            <input type="text" name="age" onChange={this.handleChange} value={this.state.friendToAdd.age} />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input type="text" name="email" onChange={this.handleChange} value={this.state.friendToAdd.email} />
          </div>
          <div>
            <label htmlFor="id">ID</label>
            <input type="text" name="id" onChange={this.handleChange} value={this.state.friendToAdd.id} />
          </div>
          <br />
          <button type="submit">Add Friend</button>

        </form>


      </div>
    )
  }

}

const mapStateToProps = ({ }) => ({  // This subscribes to Redux store updates. Anytime store updates, this function is called. The results of this must be a plain object, which will be merged into wrapped components props. 

})

export default connect(mapStateToProps, {})(AddFriend)  // This connects this component to the Redux React store
