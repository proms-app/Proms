// @flow
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {getUserInfo} from '../../../modules/api';

type PropsType = {};

export default class Account extends Component<PropsType> {
  render() {
    const user = getUserInfo();
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcome}>Sal's {user.bucque}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: "600",
  },
  welcomeContainer: {
    marginTop: 80,
  }
});
