import axios from 'axios'


export const login = creds => dispatch =>
{

  dispatch({ type: "LOGIN_START" });
  return axios.post('http://localhost:5000/api/login', creds)
    .then(res =>
    {
      console.log("Post went. Response =", res)
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.payload })
    })
    .catch(
      console.log("Post didn't go")
    )
}

export const getData = () => dispatch =>
{
  dispatch({ type: "FETCH_DATA_START" })
  axios
    .get('http://localhost:5000/api/friends', {
      headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res =>
    {
      dispatch({ type: "FETCH_DATA_SUCCESS", payload: res.data })
    })
    .catch(err =>
    {
      console.log('call failed: ', err.response);
      if (err.response.status === 403)
      {
        dispatch({ type: "USER_UNAUTHORIZED", payload: err.response })
      }
      else
      {
        dispatch({ type: "FETCH_DATA_FAILURE", payload: err.response })
      }
    })
}


export const deleteFriends = id => dispatch =>
{
  dispatch({ type: "DELETE_START" })
  axios
    .delete(`'http://localhost:5000/api/friends/${id}`, {
      headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res =>
    {
      dispatch({ type: "DELETE_SUCCESS", payload: res.data })
    })
    .catch(err =>
    {
      console.log("call failed: ", err.response)
      if (err.response.status === 403)
      {
        dispatch({ type: "USER_UNAUTHORIZED", payload: err.response })
      }
      else
      {
        dispatch({ type: "FETCH_DATA_FAILURE", payload: err.response })
      }
    })
}