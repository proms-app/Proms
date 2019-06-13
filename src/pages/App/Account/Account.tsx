// @flow
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { getUserInfo } from '../../../modules/api';

type PropsType = {};

export default class Account extends Component<PropsType> {
  render() {
    const user = getUserInfo();
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Sal's {user.bucque}</Text>
        </View>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceText}> {user.solde} </Text>
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
  welcomeText: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: '600',
  },
  welcomeContainer: {
    marginTop: 80,
  },
  balanceContainer: {
    flex: 5,
  },
  balanceText: {
    fontSize: 80,
    textAlign: 'center',
    fontWeight: '800',
  },
});
