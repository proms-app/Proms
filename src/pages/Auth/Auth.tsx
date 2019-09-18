// @flow
import { Button } from 'react-native';
import React from 'react';
import CenteredPage from 'components/CenteredPage';

type PropsType = {
  navigation: NavigationType;
};

class FirstPage extends React.Component<PropsType> {
  redirectToSignInPage = () => {
    this.props.navigation.navigate('signIn');
  };
  redirectToSignUpPage = () => {
    this.props.navigation.navigate('signUp');
  };

  render() {
    return (
      <CenteredPage>
        <Button title="Sign in!" onPress={this.redirectToSignInPage} />
        <Button title="Sign up!" onPress={this.redirectToSignUpPage} />
      </CenteredPage>
    );
  }
}

export default FirstPage;
