import React, {useCallback} from 'react';
import {View, Text} from 'react-native';
import get from 'lodash/get';
import CustomButton from '../CustomButton';
import {COLORS} from '../../constants';
import styles from './styles';
import InitialBox from '../InitialsBox';

const Comment = ({item, commentHandler, editHandler, deleteHandler}) => {
  const onReplyHandler = useCallback(() => {
    commentHandler(item);
  }, [item, commentHandler]);
  return (
    <View style={styles.container}>
      <InitialBox item={get(item, 'user')} />
      <View>
        <Text style={styles.username}>{get(item, 'user.name')}</Text>
        <Text style={styles.comment}>{get(item, 'comment')}</Text>
        <View style={styles.container}>
          <CustomButton
            title="reply"
            style={styles.buttonStyle}
            labelStyle={{color: COLORS.darkGray}}
            onPress={onReplyHandler}
          />
          <CustomButton
            title="Edit"
            style={styles.buttonStyle}
            labelStyle={{color: COLORS.darkGray}}
            onPress={editHandler}
          />
          <CustomButton
            title="remove"
            style={styles.buttonStyle}
            labelStyle={{color: COLORS.darkGray}}
            onPress={deleteHandler}
          />
        </View>
      </View>
    </View>
  );
};

export default Comment;
