import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Sae } from 'react-native-textinput-effects';
import SafeAreaView from 'react-native-safe-area-view';

type PropsType = {
  navigation: NavigationType;
};

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
  },
  card: {
    flex: 1,
    borderRadius: 5,
    marginHorizontal: 30,
    marginVertical: 120,
    backgroundColor: '#1f1',
    opacity: 0.4,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.7,
    shadowRadius: 10,
  },
  titleContainer: {
    flexDirection: 'column',
    marginTop: 30,
    marginHorizontal: 30,
  },
  titleText: {
    color: '#000',
    fontSize: 30,
  },
  inputContainer: {},
  buttonText: {
    color: '#000',
    fontSize: 25
  },
  buttonContainer: {
    marginTop: 55,
    alignItems: 'center'
  },
});
export class SignIn extends Component<PropsType> {
  goBack = () => {
    this.props.navigation.navigate('auth');
  };
  login = () => {
    this.props.navigation.navigate('account');
  };

  render() {
    return (
      <SafeAreaView style={styles.areaView}>
        <TouchableOpacity onPress={this.goBack}>
          <Text>Return</Text>
        </TouchableOpacity>
        <View style={styles.card}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Login</Text>
            <View style={styles.inputContainer}>
              <Sae
                iconClass={Text}
                label="User"
                iconColor="black"
                color="black"
                inputPadding={16}
                labelHeight={24}
                borderHeight={2}
                autoCapitalize="none"
              />
            </View>
            <View style={styles.inputContainer}>
              <Sae
                iconClass={Text}
                label="Password"
                iconColor="black"
                color="black"
                inputPadding={16}
                labelHeight={24}
                borderHeight={2}
                autoCapitalize="none"
                secureTextEntry
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={this.login}>
                <Text style={styles.buttonText}>Se connecter</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
