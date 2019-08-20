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
  returnButton: {
    marginTop: 10,
    marginHorizontal: 15,
    color: 'white'
  },
  card: {
    flex: 1,
    borderRadius: 5,
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
    color: '#80FFAA',
    fontSize: 25,
  },
  buttonContainer: {
    marginTop: 40,
    alignItems: 'center',
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
        <TouchableOpacity
        style={styles.returnButton} 
        onPress={this.goBack}>
          <Text>Retour</Text>
        </TouchableOpacity>
        <View style={styles.card}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Login</Text>
            <View style={styles.inputContainer}>
              <Input label="Nom d'utilisateur" />
            </View>
            <View style={styles.inputContainer}>
              <Input label="Mot de passe" secureTextEntry />
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
