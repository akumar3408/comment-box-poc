import React, {useCallback} from 'react';
import {View, Text, FlatList} from 'react-native';

import {useSelector} from 'react-redux';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

import CustomButton from '../../components/CustomButton';
import UserPreview from '../../components/UserPreview';
import styles from './styles';
const Home = ({navigation}) => {
  const users = useSelector(state => state.home.users);

  console.log(users);

  const addUserHandler = useCallback(() => {
    navigation.navigate('AddUser');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <CustomButton title={'Add User'} onPress={addUserHandler} />
      <View style={{marginTop: 12}}>
        <FlatList
          data={users}
          renderItem={({item}) => (
            <UserPreview item={item} navigation={navigation} />
          )}
          keyExtractor={item => item.id}
          // extraData={selectedId}
        />
      </View>
    </View>
  );
};

export default Home;
