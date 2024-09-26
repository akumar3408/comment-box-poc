import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {initials} from '../../utils/commonMethods';

const InitialBox = ({item}) => {
  return (
    <View activeOpacity={0.8} style={styles.initialsContainer}>
      <Text style={styles.initialsText}>{initials(item?.name)}</Text>
    </View>
  );
};

export default InitialBox;
