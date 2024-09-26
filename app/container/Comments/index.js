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

import {initials} from '../../utils/commonMethods';
import styles from './styles';
import {COLORS} from '../../constants';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {addCommentAction, deleteCommentAction} from './actions';
import Comment from '../../components/Comment';
import closeIcon from '../../asset/images/closeIcon.png';

const Comments = ({navigation, route}) => {
  const users = useSelector(state => state.home.users);
  const comments = useSelector(state => state.comments.comments);
  console.log('-----------------------', comments);
  const userId = route?.params?.id;
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const [comment, setComment] = useState({});
  const [activeComment, setActiveComment] = useState(null);

  const [activeUser, setActiveUser] = useState(
    find(users, item => item?.id === userId),
  );

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const replyButtonHandler = commentVal => {
    setActiveComment(commentVal);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const activeUserHandler = useCallback(userVal => {
    setActiveUser(userVal);
  }, []);
  const dummyComment = {
    id: 'id',
    user: {id: '123', name: 'Jai Prakash'},
    time: 'time',
    comment: 'this is a comment',
    replies: [
      {
        id: 'replyId',
        user: {id: '123', name: 'Ram Singh'},
        comment: 'this is a reply',
        time: '',
      },
    ],
  };

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
          style={initialsContainer(item)}
          onPress={() => activeUserHandler(item)}>
          <Text style={styles.initialsText}>{initials(item?.name)}</Text>
        </TouchableOpacity>
      );
    },
    [initialsContainer, activeUserHandler],
  );
  const onChangeTextHandler = useCallback(inputVal => {
    setComment(inputVal);
  }, []);

  const onSubmitHandler = useCallback(() => {
    let payload;
    if (activeComment) {
      payload = {
        ...activeComment,
        ...{
          replies: [
            ...activeComment?.replies,
            {user: activeUser, id: uuidv4(), comment: comment},
          ],
        },
      };
    } else {
      payload = {
        id: uuidv4(),
        user: activeUser,
        comment: comment,
        replies: [],
      };
    }
    console.log('payload', payload);
    dispatch(addCommentAction(payload));
    setComment('');
    setActiveComment(null);
  }, [comment, dispatch, activeComment, activeUser]);

  const onCrossClickHandler = useCallback(() => {
    setActiveComment(null);
  }, []);

  const onDeleteCommentHandler = useCallback(
    commentId => {
      dispatch(deleteCommentAction(commentId));
    },
    [dispatch],
  );

  const renderComments = ({item}) => {
    return (
      <View>
        <Comment
          item={item}
          commentHandler={replyButtonHandler}
          deleteHandler={onDeleteCommentHandler}
        />
        {get(item, 'replies')?.length > 0 && (
          <View style={{flex: 1, marginLeft: 60}}>
            <FlatList
              data={get(item, 'replies')}
              renderItem={renderComments}
              keyExtractor={item => item.id}
              horizontal
              style={{flexGrow: 1, marginBottom: 24}}
              // extraData={selectedId}
            />
          </View>
        )}
      </View>
    );
  };
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}>
      <View style={{marginTop: 12}}>
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          // style={styles.flatListContainer}
          contentContainerStyle={styles.flatListContainer}
          // extraData={selectedId}
        />
        <FlatList
          data={comments}
          renderItem={renderComments}
          keyExtractor={item => item.id}
          horizontal
          style={styles.flatListContainer}
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
            value={comment?.comment}
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
    </ScrollView>
  );
};

export default Comments;
