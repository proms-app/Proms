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
      <View style={{flex:1, backgroundColor: 'green'}}>
        <View style={{ flex: 0.1, flexDirection: 'row', alignItems: 'baseline', marginTop: 20}}>
          <TouchableOpacity
            onPress={this.goBack}
            style={{ width: 60, height: 30, backgroundColor: 'red'}}
          />
        </View>
        <View style={{flex: 0.9, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <View style={{width: 300, height: 500, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
          <LabelInput title="Nom" />
          <LabelInput title="Prénom" />
          <LabelInput title="Email" />
          </View>
        </View>
      </View>
    );
  }
}

export default SignUp;
