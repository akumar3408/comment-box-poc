import React, {useCallback, useState, useEffect} from 'react';
import {View, FlatList, NativeModules, Text} from 'react-native';

import {useSelector} from 'react-redux';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

import CustomButton from '../../components/CustomButton';
import UserPreview from '../../components/UserPreview';
import styles from './styles';
const Home = ({navigation}) => {
  const users = useSelector(state => state.home.users);
  const [deviceNameVal, setDeviceNameVal] = useState('');

  const {CustomDeviceInfo} = NativeModules;

  useEffect(() => {
    const fetchDeviceName = async () => {
      if (CustomDeviceInfo) {
        try {
          const deviceName = await CustomDeviceInfo.getDeviceName();
          setDeviceNameVal(deviceName);
        } catch (error) {
          console.error('Error fetching device name:', error);
        }
      } else {
        console.error('CustomDeviceInfo module is not available');
      }
    };

    fetchDeviceName();
  }, [CustomDeviceInfo]);

  const addUserHandler = useCallback(() => {
    navigation.navigate('AddUser');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <CustomButton title={'Add User'} onPress={addUserHandler} />
        <View style={styles.contentContainer}>
          <FlatList
            data={users}
            renderItem={({item}) => (
              <UserPreview item={item} navigation={navigation} />
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.flatListContentContainer}
          />
        </View>
      </View>
      <Text style={styles.deviceStyle}>{deviceNameVal}</Text>
    </View>
  );
};

export default Home;
