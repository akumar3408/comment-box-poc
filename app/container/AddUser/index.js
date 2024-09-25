import React, {useCallback, useState, useId} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import CustomInput from '../../components/CustomInput';
import styles from './styles';
import CustomButton from '../../components/CustomButton';
import {addUserAction} from './actions';

const AddUser = ({navigation}) => {
  const [input, setInput] = useState('');

//   const users = useSelector(state => state.home.users);

  const dispatch = useDispatch();
  const userId = useId();

  const onChangeTextHandler = useCallback(inputVal => {
    setInput(inputVal);
  }, []);
  const onSubmitHandler = useCallback(() => {
    dispatch(addUserAction({name: input, id: userId}));
    navigation.goBack();
  }, [dispatch, userId, input, navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.inputLabel}>Name</Text>
        <CustomInput onChangeText={onChangeTextHandler} value={input} />
      </View>
      <CustomButton
        title={'Submit'}
        style={styles.buttonStyle}
        onPress={onSubmitHandler}
      />
    </View>
  );
};

export default AddUser;
