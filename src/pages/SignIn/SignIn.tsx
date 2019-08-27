import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import { Input } from '../../components/Input';
import SafeAreaView from 'react-native-safe-area-view';
import { useMyStore } from '../../modules/me';

type PropsType = {
  navigation: NavigationType;
};

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
    backgroundColor: '#68E8B7',
  },
  returnButton: {
    marginTop: 10,
    marginHorizontal: 15,
    color: 'white',
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

export const SignIn = props => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, hasErrored } = useMyStore();

  const goBack = () => {
    props.navigation.navigate('auth');
  };

  const tryLogin = async () => {
    try {
      await login(name, password);
      props.navigation.navigate('account');
    } catch (error) {}
  };

  return (
    <SafeAreaView style={styles.areaView}>
      <TouchableOpacity style={styles.returnButton} onPress={goBack}>
        <Text>Retour</Text>
      </TouchableOpacity>
      <View style={styles.card}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Login</Text>
          <View style={styles.inputContainer}>
            <Input onChangeText={setName} value={name} label="Nom d'utilisateur" />
          </View>
          <View style={styles.inputContainer}>
            <Input
              onChangeText={setPassword}
              value={password}
              label="Mot de passe"
              secureTextEntry
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={tryLogin} disabled={isLoading}>
              {isLoading ? (
                <Text style={styles.buttonText}>Se connecter</Text>
              ) : (
                <ActivityIndicator />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
