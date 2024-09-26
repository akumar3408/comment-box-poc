import {REHYDRATE} from 'redux-persist';
import filter from 'lodash/filter';
import {
  ADD_COMMENT,
  ADD_REPLY,
  EDIT_COMMENT,
  DELETE_COMMENT,
} from '../../container/Comments/constants';

const initialState = {
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
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case DELETE_COMMENT:
      const filteredComment = filter(
        state?.comments,
        item => item?.id !== action.payload,
      );
      return {...state, comments: filteredComment};
    case ADD_REPLY:
    case EDIT_COMMENT:
    default:
      return state;
  }
};

export default homeReducer;
