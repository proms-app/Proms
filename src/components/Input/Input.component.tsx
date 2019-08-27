import React from 'react';
import { TextField } from 'react-native-material-textfield';

type PropsType = {
  label: string;
  onChangeText: any;
  value: string;
  errorText: string;
};

export const Input = (props: PropsType) => {
  return (
    <TextField
      {...props}
      label={props.label || ''}
      autoCapitalize="none"
      errorColor="red"
      textColor="white"
      value={props.value}
      onChangeText={props.onChangeText}
    />
  );
};
