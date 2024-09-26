import {ADD_USER} from '../../container/AddUser/constants';

const initialState = {
  users: null,
  isLoading: false,
  error: null,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    default:
      return state;
  }
};

export default homeReducer;
