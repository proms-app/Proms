// @flow
import { Button, AsyncStorage } from 'react-native';
import React from 'react';
import CenteredPage from 'components/CenteredPage';

type PropsType = {
  navigation: NavigationType;
};

class FirstPage extends React.Component<PropsType> {
  signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('app');
  };

  render() {
    return (
      <CenteredPage>
        <Button title="Sign in!" onPress={this.signInAsync} />
        <Button title="Sign up!" onPress={() => console.log('you clicked on SignUp')} />
      </CenteredPage>
    );
  }
}

export default FirstPage;
