import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'

import { getData, deleteFriends } from '../Actions'

class FriendsList extends React.Component
{
  state: {
    deletingFriend: null
  }

  componentDidMount()
  {
    this.props.getData()
  }

  deleteFriend = id =>
  {
    this.setState({ deletingFriendId: id })
    this.props.deleteFriends(id)
  }

  render()
  {
    if (this.props.fetchingFriends)
    {
      return <Loader type="Puff" height="100" width="100" />
    }
    return (
      <div>
        <h2>Friends</h2>
        {this.props.friends.map(friend =>(
          <div className="friend-card">
            <i class="fas fa-times" onClick={() => this.deleteFriend(friend.id)} />
            <h4>{friend.name}</h4>
            <p>{friend.email}</p>
            {this.props.deletingFriend && this.state.deletingFriendID === friend.id && (<p>Deleting Friend</p>)}
          </div>
        ))}


      </div>
    )
  }
}

const mapStateToProps = ({ deletingFriend, friends, fetchingFriends }) => ({
  deletingFriend,
  friends,
  fetchingFriends
})  // subscribes to these items from the store. Store = state I think, and the second instance is props.  

export default withRouter(
  connect(mapStateToProps, { getData, deleteFriends })(FriendsList)
)

