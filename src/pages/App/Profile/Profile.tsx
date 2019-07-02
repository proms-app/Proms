// @flow
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';

type PropsType = {
  navigation: NavigationType;
};

export default class Profile extends Component<PropsType> {
  doLogout = () => {
    AsyncStorage.setItem('userToken', '');
    this.props.navigation.navigate('auth');
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.profileContainer}>
          <Text style={styles.welcome}>My Profile Here</Text>
        </View>
        <View style={styles.logoutContainer}>
          <TouchableOpacity onPress={this.doLogout} style={styles.logoutButton}>
            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 18 }}>Se déconnecter</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  profileContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  logoutContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButton: {
    width: 200,
    height: 70,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
