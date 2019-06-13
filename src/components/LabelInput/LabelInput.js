import React from 'react';
import { View, Text, TextInput } from 'react-native';

export const LabelInput = props => (
  <View style={{ width: 150, height: 100, backgroundColor: 'blue' }}>
    <Text>{props.title}</Text>
    <TextInput style={{ backgroundColor: 'yellow' }} />
  </View>
);
