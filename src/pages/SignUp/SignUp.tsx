// @flow
import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { LabelInput } from '../../components/LabelInput/LabelInput.js';
type PropsType = {
  navigation: NavigationType;
};

class SignUp extends React.Component<PropsType> {
  goBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ width: 30, height: 30, flex: 1, backgroundColor: 'red' }} />
        </View>
        <LabelInput title="Nom" />
        <LabelInput title={'Prenom'} />
      </View>
    );
  }
}

export default SignUp;
