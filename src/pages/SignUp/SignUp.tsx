// @flow
import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { Sae } from 'react-native-textinput-effects';
import SafeAreaView from 'react-native-safe-area-view';

type PropsType = {
  navigation: NavigationType;
};

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
  },
  returnText: {
    marginTop:5,
    color: '#000',
  },
  card: {
    flex: 1,
    borderRadius: 5,
    marginHorizontal: 30,
    marginVertical: 50,
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
  buttonText: {
    color: '#000',
    fontSize: 25
  },
  buttonContainer: {
    marginTop: 55,
    alignItems: 'center'
  },
  inputContainer: {},
});
export class SignUp extends Component<PropsType> {
  goBack = () => {
    this.props.navigation.navigate('auth');
  };

  render() {
    return (
      <SafeAreaView style={styles.areaView}>
        <TouchableOpacity onPress={this.goBack}>
          <Text style={styles.returnText}>Retour</Text>
        </TouchableOpacity>
        <View style={styles.card}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Créer un compte</Text>
            <View style={styles.inputContainer}>
              <Sae
                iconClass={Text}
                label="Nom d'utilisateur"
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
                label="Email"
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
                label="Mot de passe"
                iconColor="black"
                color="black"
                inputPadding={16}
                labelHeight={24}
                borderHeight={2}
                autoCapitalize="none"
                secureTextEntry
              />
            </View>
            <View style={styles.inputContainer}>
              <Sae
                iconClass={Text}
                label="Confirmer mot de passe"
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
              <TouchableOpacity onPress={()=>{}}>
                <Text style={styles.buttonText}>Valider</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default SignUp;
