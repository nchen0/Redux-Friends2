import { FETCH_FRIENDS_SUCCESS } from "../actions";
const initialState = {
  friends: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIENDS_SUCCESS:
      return Object.assign({}, state, { friends: action.payload });
  }
  return state;
};
