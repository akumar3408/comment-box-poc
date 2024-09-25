import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';
import {COLORS} from '../../constants';

const CustomInput = ({value, placeholder, onChangeText, inputStyle}) => {
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      placeholderTextColor={COLORS.darkGray}
      style={[styles.input, inputStyle]}
    />
  );
};

export default CustomInput;
