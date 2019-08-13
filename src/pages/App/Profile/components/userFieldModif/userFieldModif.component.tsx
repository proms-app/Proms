import React, { Fragment } from 'react';
import { Text, StyleSheet, TextInput } from 'react-native';


type PropsType = {
  label: string;
  value: string
};

const styles = StyleSheet.create({
  profileTitle: {
    fontSize: 20,
    color: '#D1E3DE',
  },
  profileInput: {
    fontSize: 25,
  },
});

export const UserFieldModif = (props: PropsType) => {
  return (
    <Fragment>
      <Text style={styles.profileTitle}>{props.label}</Text>
      <TextInput 
      style={styles.profileInput}>
      placeholder = {props.value}
      </TextInput>
    </Fragment>
  );
};
