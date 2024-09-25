import React, {useCallback} from 'react';
import {View, Text} from 'react-native';

import {useSelector} from 'react-redux';

import CustomButton from '../../components/CustomButton';
import styles from './styles';
const Home = ({navigation}) => {
  const users = useSelector(state => state.home.users);

  console.log(users);

  const addUserHandler = useCallback(() => {
    navigation.navigate('AddUser');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text> Home Container</Text>
      <CustomButton title={'Add User'} onPress={addUserHandler} />
    </View>
  );
};

export default Home;
