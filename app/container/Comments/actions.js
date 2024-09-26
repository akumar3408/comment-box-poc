import {
  ADD_COMMENT,
  ADD_REPLY,
  EDIT_COMMENT,
  DELETE_COMMENT,
  DELETE_REPLY,
  EDIT_REPLY,
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
export const deleteReplyAction = payload => ({
  type: DELETE_REPLY,
  payload,
});
export const addReplyAction = payload => ({
  type: ADD_REPLY,
  payload,
});
export const editReplyAction = payload => ({
  type: EDIT_REPLY,
  payload,
});
