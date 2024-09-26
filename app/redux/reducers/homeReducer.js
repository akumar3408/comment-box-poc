import {REHYDRATE} from 'redux-persist';
import {ADD_USER} from '../../container/AddUser/constants';
import {
  ADD_COMMENT,
  ADD_REPLY,
  EDIT_COMMENT,
  DELETE_COMMENT,
} from '../../container/Comments/constants';

const initialState = {
  users: [],
  comments: [],
  data: null,
  isLoading: false,
  error: null,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
      // Merge the rehydrated state with the existing state, to ensure nothing is removed
      return {
        ...state,
        ...action.payload?.home, // Merge only if `home` exists in the persisted state
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case ADD_REPLY:
    case EDIT_COMMENT:
    case DELETE_COMMENT:
    default:
      return state;
  }
};

export default homeReducer;
