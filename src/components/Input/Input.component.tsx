import React from 'react';
import { Sae } from 'react-native-textinput-effects';
import { Text } from 'react-native';

type PropsType = {
  label: string;
};

export const Input = (props: PropsType) => {
  return (
    <Sae
      iconClass={Text}
      label={props.label || ''}
      iconColor="black"
      color="black"
      inputPadding={16}
      labelHeight={24}
      borderHeight={2}
      autoCapitalize="none"
    />
  );
};
