import React, {forwardRef} from 'react';
import {TextInput} from 'react-native';
import styles from './styles';
import {COLORS} from '../../constants';

const CustomInput = forwardRef(
  (
    {value, placeholder, onChangeText, inputStyle, multiline, onSubmitEditing},
    ref,
  ) => {
    return (
      <TextInput
        ref={ref}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor={COLORS.darkGray}
        style={[styles.input, inputStyle]}
        multiline={multiline}
        onSubmitEditing={onSubmitEditing}
      />
    );
  },
);

export default CustomInput;
