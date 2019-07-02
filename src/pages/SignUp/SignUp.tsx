// @flow
import React from 'react';
import { View, TouchableOpacity, Text, TextInput, AsyncStorage } from 'react-native';
import { LabelInput } from '../../components/LabelInput/LabelInput';
import { signUp } from '../../modules/api';

type PropsType = {
  navigation: NavigationType;
};

class SignUp extends React.Component<PropsType> {
  state = {
    email: '',
    password: '',
  };

  goBack = () => {
    this.props.navigation.navigate('auth');
  };

  doSignUp = async () => {
    const signUpInfo = await signUp(this.state.email, this.state.password);
    AsyncStorage.setItem('userToken', signUpInfo.token);
    this.props.navigation.navigate('app');
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#1FE802' }}>
        <TouchableOpacity
          onPress={this.goBack}
          style={{ flex: 1, width: 60, height: 30, marginLeft: 5, justifyContent: 'center' }}
        >
          <Text style={{ fontWeight: 'bold', color: 'white' }}>Back</Text>
        </TouchableOpacity>

        <View style={{ flex: 6, justifyContent: 'space-between', alignItems: 'center' }}>
          <LabelInput title="Nom" />
          <TextInput
            style={{ height: 100 }}
            placeholder={'titre'}
            onChangeText={text => this.setState({ nom: text })}
          />
          <LabelInput title="Prénom" />
          <LabelInput title="Email" />
        </View>

        <TouchableOpacity
          onPress={this.doSignUp}
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 30 }}>Valider</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SignUp;
