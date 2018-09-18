//@flow

import { ActivityIndicator, AsyncStorage, StatusBar, Text } from 'react-native';
import React from 'react';
import I18n from 'lib/i18n';
import CenteredPage from 'components/CenteredPage';

type PropsType = {
  navigation: NavigationType,
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
        <Text>{I18n.t('loading')}</Text>
        <StatusBar barStyle="default" />
      </CenteredPage>
    );
  }
}

export default AuthLoadingScreen;
