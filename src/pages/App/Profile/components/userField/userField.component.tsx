import React, { Fragment } from 'react';
import { Text, StyleSheet } from 'react-native';

type PropsType = {
  title: string;
  value: string;
};

const styles = StyleSheet.create({
  profileTitle: {
    fontSize: 20,
    color: '#D1E3DE',
  },
  profileText: {
    fontSize: 25,
  },
});

export const UserField = (props: PropsType) => {
  return (
    <Fragment>
      <Text style={styles.profileTitle}>{props.title}</Text>
      <Text style={styles.profileText}>{props.value}</Text>
    </Fragment>
  );
};
