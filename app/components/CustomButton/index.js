import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const CustomButton = ({title, onPress, style, labelStyle}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, style]}
      onPress={onPress}>
      <Text style={[styles.buttonText, labelStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
