import {EXAMPLE_REQUEST} from '../../container/Home/constants';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXAMPLE_REQUEST:
      return {...state, ...{data: action.payload}};
    default:
      return state;
  }
};

export default commentsReducer;
