import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case CLEAR_USERS:
      return { ...state, loading: false, users: [] };
    case SEARCH_USERS:
      return { ...state, users: action.payload, loading: false };
    case GET_USER:
      return { ...state, user: action.payload, loading: false };
    default:
      return state;
  }
};

export default reducer;
