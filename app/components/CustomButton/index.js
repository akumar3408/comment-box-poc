import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const CustomButton = ({title, onPress, style}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, style]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
