import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Input } from '../../components/Input';
import SafeAreaView from 'react-native-safe-area-view';

type PropsType = {
  navigation: NavigationType;
};

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
    backgroundColor: '#68E8B7'
  },
  card: {
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 30,
    marginVertical: 150,
    backgroundColor: 'white',
    opacity: 0.9,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.7,
    shadowRadius: 10,
  },
  titleContainer: {
    marginTop: 30,
    marginHorizontal: 30,
  },
  titleText: {
    color: '#000',
    fontSize: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#80FFAA',
    borderRadius: 5
  },
  textContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 15
  },
  buttonContainer2: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#68E86F',
    borderRadius: 5
  }
});
export class SignIn extends Component<PropsType> {
  goBack = () => {
    this.props.navigation.navigate('auth');
  };
  login = () => {
    this.props.navigation.navigate('account');
  };
  signUp = () => {
    this.props.navigation.navigate('signUp')
  }

  render() {
    return (
      <SafeAreaView style={styles.areaView}>
        <View style={styles.card}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Hello!</Text>
            <View style={styles.inputContainer}>
              <Input label="Nom d'utilisateur" />
            </View>
            <View style={styles.inputContainer}>
              <Input label="Mot de passe" secureTextEntry />
            </View>
              <TouchableOpacity style={styles.buttonContainer}
              onPress={this.login}>
                <Text style={styles.buttonText}>Se connecter</Text>
              </TouchableOpacity>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>OU</Text>
            </View>
            <TouchableOpacity style={styles.buttonContainer2}
              onPress={this.signUp}>
                <Text style={styles.buttonText}>Créer un compte</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
