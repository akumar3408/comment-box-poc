import React, {useCallback, useState, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Platform,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

import get from 'lodash/get';
import find from 'lodash/find';
import map from 'lodash/map';

import {initials} from '../../utils/commonMethods';
import styles from './styles';
import {COLORS} from '../../constants';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {
  addCommentAction,
  addReplyAction,
  deleteCommentAction,
  deleteReplyAction,
  editCommentAction,
  editReplyAction,
} from './actions';
import Comment from '../../components/Comment';
import closeIcon from '../../asset/images/closeIcon.png';

const Comments = ({navigation, route}) => {
  const users = useSelector(state => state.home.users);
  const comments = useSelector(state => state.comments.comments);
  // console.log('-----------------------', comments);
  const userId = route?.params?.id;
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const [input, setInput] = useState({});
  const [activeComment, setActiveComment] = useState(null);
  const [editedComment, setEditedComment] = useState(null);
  const [editedReply, setEditedReply] = useState(null);

  const [activeUser, setActiveUser] = useState(
    find(users, item => item?.id === userId),
  );

  const replyButtonHandler = commentVal => {
    setActiveComment(commentVal);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const activeUserHandler = useCallback(userVal => {
    setActiveUser(userVal);
  }, []);

  const initialsContainer = useCallback(
    itemVal => {
      if (itemVal?.id === activeUser?.id) {
        return [
          styles.initialsContainer,
          {backgroundColor: COLORS.greenBottle},
        ];
      }
      return styles.initialsContainer;
    },
    [activeUser],
  );

  const renderItem = useCallback(
    ({item}) => {
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          key={uuidv4()}
          style={initialsContainer(item)}
          onPress={() => activeUserHandler(item)}>
          <Text style={styles.initialsText}>{initials(item?.name)}</Text>
        </TouchableOpacity>
      );
    },
    [initialsContainer, activeUserHandler],
  );
  const onChangeTextHandler = useCallback(inputVal => {
    setInput(inputVal);
  }, []);

  console.log('---------comments---------', comments);

  const onSubmitHandler = useCallback(() => {
    let payload;
    if (activeComment) {
      payload = {
        commentId: activeComment?.id,
        reply: {
          comment: input,
          id: uuidv4(),
          user: activeUser,
        },
      };
      dispatch(addReplyAction(payload));
    } else if (editedReply) {
      payload = {
        commentId: editedComment?.id,
        replyId: editedReply?.id,
        comment: input,
      };
      dispatch(editReplyAction(payload));
    } else if (editedComment) {
      // payload = map(comments, item => {
      //   let updatedItem = item;
      //   if (item?.id === editedComment?.id) {
      //     updatedItem.comment = input;
      //   }
      //   return updatedItem;
      // });
      payload = {
        commentId: editedComment?.id,
        comment: input,
      };
      dispatch(editCommentAction(payload));
    } else {
      payload = {
        id: uuidv4(),
        user: activeUser,
        comment: input,
        replies: [],
      };
      dispatch(addCommentAction(payload));
    }
    setInput('');
    setEditedComment(null);
    setActiveComment(null);
    setEditedReply(null);
  }, [activeComment, editedReply, editedComment, input, activeUser, dispatch]);

  const onCrossClickHandler = useCallback(() => {
    setActiveComment(null);
  }, []);

  const onDeleteCommentHandler = useCallback(
    commentId => {
      dispatch(deleteCommentAction(commentId));
    },
    [dispatch],
  );
  const onDeleteReplyHandler = useCallback(
    (commentId, replyId) => {
      dispatch(deleteReplyAction({commentId, replyId}));
    },
    [dispatch],
  );

  const onEditCommentHandler = commentItem => {
    setEditedComment(commentItem);
    setInput(commentItem?.comment);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const onEditReplyHandler = (commentItem, replyItem) => {
    setEditedComment(commentItem);
    setEditedReply(replyItem);
    setInput(replyItem?.comment);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const renderComments = ({item}) => {
    return (
      <View style={{marginTop: 12}}>
        <Comment
          item={item}
          commentHandler={replyButtonHandler}
          deleteHandler={onDeleteCommentHandler}
          editHandler={onEditCommentHandler}
          activeUser={activeUser}
        />
        {get(item, 'replies')?.length > 0 &&
          map(get(item, 'replies'), itemVal => {
            return (
              <View key={uuidv4()} style={{marginLeft: 60}}>
                <Comment
                  item={itemVal}
                  editHandler={onEditReplyHandler}
                  deleteHandler={onDeleteReplyHandler}
                  activeUser={activeUser}
                  parentComment={item}
                />
              </View>
            );
          })}
      </View>
    );
  };
  return (
    <View
      style={styles.container}
      // nestedScrollEnabled
      // contentContainerStyle={styles.contentContainerStyle}
    >
      <View style={{flex: 1, marginTop: 12}}>
        <View style={{flexDirection: 'row'}}>
          {map(users, item => renderItem({item}))}
        </View>
        <FlatList
          data={comments}
          renderItem={renderComments}
          keyExtractor={item => item.id}
          // horizontal
          contentContainerStyle={styles.flatListContainer}
          // extraData={selectedId}
        />
      </View>
      <View>
        {activeComment && (
          <View style={styles.activeCommentContainer}>
            <Text style={styles.activeCommentText}>
              {get(activeComment, 'comment')}
            </Text>
            <TouchableOpacity
              onPress={onCrossClickHandler}
              style={styles.imageContainer}>
              <Image source={closeIcon} style={styles.image} />
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.flexRow}>
          <CustomInput
            ref={inputRef}
            value={input}
            inputStyle={styles.inputStyle}
            onChangeText={onChangeTextHandler}
            placeholder={'Leave your comment'}
            multiline
          />
          <CustomButton
            title="Submit"
            style={styles.submitButton}
            onPress={onSubmitHandler}
          />
        </View>
      </View>
    </View>
  );
};

export default Comments;
