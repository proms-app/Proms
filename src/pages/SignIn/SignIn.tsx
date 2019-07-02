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
    marginVertical: 60,
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
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  titleText: {
    color: '#000',
    fontSize: 30,
  },
  inputContainer: {},
});
export class SignIn extends Component<PropsType> {
  goBack = () => {
    this.props.navigation.navigate('auth');
  };

  render() {
    return (
      <SafeAreaView style={styles.areaView}>
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
          </View>
        </View>
        <TouchableOpacity onPress={this.goBack}>
          <Text>Return</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
