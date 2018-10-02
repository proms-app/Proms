// @flow
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type PropsType = {};

export default class Profile extends Component<PropsType> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>My Profile Here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
