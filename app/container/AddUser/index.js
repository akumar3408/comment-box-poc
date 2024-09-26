import React, {useCallback, useState} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

import CustomInput from '../../components/CustomInput';
import styles from './styles';
import CustomButton from '../../components/CustomButton';
import {addUserAction} from './actions';

const AddUser = ({navigation}) => {
  const [input, setInput] = useState('');

  //   const users = useSelector(state => state.home.users);

  const dispatch = useDispatch();

  const onChangeTextHandler = useCallback(inputVal => {
    setInput(inputVal);
  }, []);
  const onSubmitHandler = useCallback(() => {
    dispatch(addUserAction({name: input, id: uuidv4()}));
    navigation.goBack();
  }, [dispatch, input, navigation]);
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
