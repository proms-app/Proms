// @flow
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { LabelInput } from '../../components/LabelInput/LabelInput';

type PropsType = {
  navigation: NavigationType;
};

class SignUp extends React.Component<PropsType> {
  goBack = () => {
    this.props.navigation.navigate('auth');
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={this.goBack}
            style={{ width: 30, height: 30, flex: 1, backgroundColor: 'red' }}
          />
        </View>
        <LabelInput title="Nom" />
        <LabelInput title={'Prenom'} />
      </View>
    );
  }
}

export default SignUp;
