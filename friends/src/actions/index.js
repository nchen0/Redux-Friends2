import axios from "axios";
export const FETCH_FRIENDS_STARTED = "FETCH_FRIENDS_STARTED";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_ERROR = "FETCH_FRIENDS_ERROR";
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
export const ADD_FRIEND_ERROR = "ADD_FRIEND_ERROR";

export const fetchFriends = () => {
  return dispatch => {
    dispatch({ type: FETCH_FRIENDS_STARTED });
    return axios
      .get("http://localhost:5000/api/friends")
      .then(({ data }) => {
        dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: data });
      })
      .catch(err => {
        dispatch({ type: FETCH_FRIENDS_ERROR, payload: err });
      });
  };
};

export const addFriends = friend => {
  return dispatch => {
    return axios
      .post("http://localhost:5000/api/friends", friend)
      .then(({ data }) => {
        console.log("data is: ", data);
        dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: data });
      })
      .catch(err => {
        dispatch({ type: ADD_FRIEND_ERROR, payload: err });
      });
  };
};
