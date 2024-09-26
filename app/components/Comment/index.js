import React, {useCallback} from 'react';
import {View, Text} from 'react-native';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import CustomButton from '../CustomButton';
import {COLORS} from '../../constants';
import styles from './styles';
import InitialBox from '../InitialsBox';

const Comment = ({
  item,
  activeUser,
  parentComment,
  commentHandler,
  editHandler,
  deleteHandler,
}) => {
  const onReplyHandler = useCallback(() => {
    commentHandler(item);
  }, [item, commentHandler]);

  const onDeleteComment = useCallback(() => {
    if (parentComment) {
      deleteHandler(parentComment?.id, item?.id);
    } else {
      deleteHandler(item?.id);
    }
  }, [deleteHandler, item?.id, parentComment]);

  const onEditComment = useCallback(() => {
    if (parentComment) {
      editHandler(parentComment, item);
    } else {
      editHandler(item);
    }
  }, [editHandler, item, parentComment]);

  return (
    <View style={styles.container}>
      <InitialBox item={get(item, 'user')} />
      <View style={{flex: 1}}>
        <Text style={styles.username}>{get(item, 'user.name')}</Text>
        <Text style={styles.comment}>{get(item, 'comment')}</Text>
        <View style={styles.container}>
          {!isEqual(activeUser?.id, get(item, 'user.id')) && (
            <CustomButton
              title="reply"
              style={styles.buttonStyle}
              labelStyle={{color: COLORS.darkGray}}
              onPress={onReplyHandler}
            />
          )}
          {isEqual(activeUser?.id, get(item, 'user.id')) && (
            <>
              <CustomButton
                title="Edit"
                style={styles.buttonStyle}
                labelStyle={{color: COLORS.darkGray}}
                onPress={onEditComment}
              />
              <CustomButton
                title="remove"
                style={styles.buttonStyle}
                labelStyle={{color: COLORS.darkGray}}
                onPress={onDeleteComment}
              />
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default Comment;
