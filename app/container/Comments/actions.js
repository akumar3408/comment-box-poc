import {
  ADD_COMMENT,
  ADD_REPLY,
  EDIT_COMMENT,
  DELETE_COMMENT,
} from './constants';

export const addCommentAction = payload => ({
  type: ADD_COMMENT,
  payload,
});
export const editCommentAction = payload => ({
  type: EDIT_COMMENT,
  payload,
});
export const deleteCommentAction = payload => ({
  type: DELETE_COMMENT,
  payload,
});
export const addReplyAction = payload => ({
  type: ADD_REPLY,
  payload,
});
