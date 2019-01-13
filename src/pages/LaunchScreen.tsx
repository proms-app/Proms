//@flow

import { ActivityIndicator, AsyncStorage, StatusBar, Text } from 'react-native';
import React from 'react';
import CenteredPage from 'components/CenteredPage';

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
      </CenteredPage>
    );
  }
}

export default AuthLoadingScreen;
