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
      <View style={{flex:1, backgroundColor:'#1FE802'}}>
          <TouchableOpacity
            onPress={this.goBack}
            style={{flex:1, width: 60, height: 30, marginLeft:5 , justifyContent:'center'}}>
            <Text style={{fontWeight:'bold', color:'white'}}>Back</Text>
          </TouchableOpacity>
            
          <View style={{flex:6, justifyContent: 'space-between', alignItems: 'center'}}>
            <LabelInput title="Nom" />
            <LabelInput title="Prénom" />
            <LabelInput title="Email" />
          </View>

          <TouchableOpacity
            onPress={() => {}}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontWeight:'bold', color:'white', fontSize: 30}}>Valider</Text>
          </TouchableOpacity>   
      </View> 
    );
  }
}

export default SignUp;
