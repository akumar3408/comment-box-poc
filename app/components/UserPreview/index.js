import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {initials} from '../../utils/commonMethods';

const UserPreview = ({item, navigation, style}) => {
  const onPressHandler = useCallback(() => {
    navigation.navigate('Comments', {id: item?.id});
  }, [navigation, item]);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, style]}
      onPress={onPressHandler}>
      <View style={styles.initialsContainer}>
        <Text style={styles.initialsText}>{initials(item?.name)}</Text>
      </View>
      <Text style={styles.buttonText}>{item?.name}</Text>
    </TouchableOpacity>
  );
};

export default UserPreview;
