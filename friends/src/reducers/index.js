import { FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_STARTED } from "../actions";
const initialState = {
  fetching: false,
  friends: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIENDS_STARTED:
      return Object.assign({}, state, { fetching: true });
    case FETCH_FRIENDS_SUCCESS:
      return Object.assign({}, state, { friends: action.payload, fetching: false });
    default:
      return state;
  }
};
