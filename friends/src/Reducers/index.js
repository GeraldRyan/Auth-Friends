// important did you add a default? 


const initialState = {
  friends: [],
  loggingIn: false,
  deletingFriend: false,
  error: '',
  errorStatusCode: null,
  fetchingFriends: false,
  token: localStorage.getItem('token')
}

export const reducer = (state = initialState, action) =>
{
  console.log("action", action)
  switch (action.type)
  {
    case "LOGIN_START":
      return {
        ...state, loggingIn: true
      }
    case "LOGIN_SUCCESS":
      return {
        ...state, loggingIn: false,
        token: action.payload
      }
    case 'FETCH_DATA_START':
      return {
        ...state,
        fetchingFriends: true
      }
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        error: '',
        errorStatusCode: null,
        fetchingFriends: false,
        friends: action.payload
      }
      default:
        return state;  //important
  }
}