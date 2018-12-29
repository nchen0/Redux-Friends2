import axios from "axios";
export const FETCH_FRIENDS_STARTED = "FETCH_FRIENDS_STARTED";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_ERROR = "FETCH_FRIENDS_ERROR";

export const fetchFriends = () => {
  return dispatch => {
    dispatch({ type: FETCH_FRIENDS_STARTED });
    return axios
      .get("http://localhost:5000/api/friends")
      .then(({ data }) => {
        dispatch({ type: FETCH_FRIENDS_SUCCESS, data });
      })
      .catch(err => {
        dispatch({ type: FETCH_FRIENDS_ERROR, err });
      });
  };
};
