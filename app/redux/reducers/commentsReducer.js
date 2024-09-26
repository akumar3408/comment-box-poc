import {REHYDRATE} from 'redux-persist';
import filter from 'lodash/filter';
import map from 'lodash/map';
import get from 'lodash/get';
import {
  ADD_COMMENT,
  ADD_REPLY,
  EDIT_COMMENT,
  DELETE_COMMENT,
  DELETE_REPLY,
  EDIT_REPLY,
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
    case DELETE_REPLY:
      // const replyDeletedComments = filter(
      //   state?.comments,
      //   item => item?.id !== action.payload,
      // );
      // return {...state, comments: filteredComment};
      const replyDeletedComments = map(state.comments, item => {
        let updatedReplyItem = item;
        if (updatedReplyItem?.id === action.payload.commentId) {
          const filteredReplies = filter(
            updatedReplyItem?.replies,
            replyVal => replyVal?.id !== action.payload.replyId,
          );
          updatedReplyItem = {
            ...updatedReplyItem,
            replies: filteredReplies,
          };
        }
        return updatedReplyItem;
      });
      return {
        ...state,
        comments: replyDeletedComments,
      };
    case ADD_REPLY:
      const updatedComments = state.comments.map(item => {
        let updatedAddItem = item;
        if (item.id === action.payload.commentId) {
          updatedAddItem = {
            ...updatedAddItem,
            replies: [...updatedAddItem.replies, ...[action.payload.reply]],
          };
        }
        return updatedAddItem;
      });
      return {
        ...state,
        comments: updatedComments,
      };
    case EDIT_REPLY:
      const editedReplyComments = state.comments.map(item => {
        let editeReplyItem = item;
        if (editeReplyItem.id === action.payload.commentId) {
          const filteredReplies = map(editeReplyItem?.replies, replyVal => {
            let replyItem = replyVal;
            if (replyItem?.id === action.payload.replyId) {
              replyItem = {
                ...replyItem,
                comment: action.payload.comment,
              };
            }
            return replyItem;
          });
          editeReplyItem = {
            ...editeReplyItem,
            replies: filteredReplies,
          };
          // updatedAddItem = {
          //   ...updatedAddItem,
          //   replies: [...updatedAddItem.replies, ...[action.payload.reply]],
          // };
        }
        return editeReplyItem;
      });
      return {
        ...state,
        comments: editedReplyComments,
      };
    case EDIT_COMMENT:
      const editedComments = map(state.comments, item => {
        let updatedEditedItem = item;
        if (item?.id === action.payload.commentId) {
          updatedEditedItem = {
            ...updatedEditedItem,
            comment: action.payload.comment,
          };
        }
        return updatedEditedItem;
      });
      return {
        ...state,
        comments: editedComments,
      };
    default:
      return state;
  }
};

export default homeReducer;
