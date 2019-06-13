//@flow

import { ActivityIndicator, AsyncStorage, StatusBar, Text, Image, AppRegistry } from 'react-native';
import React from 'react';
import CenteredPage from 'components/CenteredPage';
import Logal_de_proms from '../assets/Logal_de_proms.png';

type PropsType = {
  navigation: NavigationType;
};

class AuthLoadingScreen extends React.Component<PropsType> {
  constructor(props: PropsType) {
    super(props);
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    this.props.navigation.navigate(userToken ? 'app' : 'auth');
  };

  render() {
    return (
      <CenteredPage>
        <ActivityIndicator />
        <Text>Loading</Text>
        <StatusBar barStyle="default" />
        <Image source={Logal_de_proms} />
      </CenteredPage>
    );
  }
}

AppRegistry.registerComponent('AuthLoadingScreen', () => AuthLoadingScreen);

export default AuthLoadingScreen;
