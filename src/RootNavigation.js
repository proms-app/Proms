// @flow
import { createSwitchNavigator } from 'react-navigation';

import App from './pages/App';
import LaunchScreen from './pages/LaunchScreen';
import SignUp from './pages/SignUp';
import { SignIn } from './pages/SignIn';

export default createSwitchNavigator(
  {
    launch: LaunchScreen,
    app: App,
    signUp: SignUp,
    signIn: SignIn,
  },
  {
    initialRouteName: 'launch',
  }
);
