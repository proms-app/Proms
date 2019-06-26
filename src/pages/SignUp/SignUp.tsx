// @flow
import React from 'react';
import { View, TouchableOpacity, Text} from 'react-native';
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
      <View style={{ flex:1, backgroundColor:'#1FE802'}}>
          <TouchableOpacity
            onPress={this.goBack}
            style={{ width: 60, height: 30, marginTop: 20, marginLeft:5 , justifyContent:'center'}}>
            <Text style={{fontWeight:'bold', color:'white'}}>Back</Text>
          </TouchableOpacity>
            
          <View style={{flex:15, justifyContent: 'center', alignItems: 'center',backgroundColor: '#1FE802'}}>
            <View style={{width: 300, height: 500, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '1FE802'}}>
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
