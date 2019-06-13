// @flow
import { createSwitchNavigator } from 'react-navigation';

import App from './pages/App';
import LaunchScreen from './pages/LaunchScreen';
import Auth from './pages/Auth';
import SignUp from './pages/SignUp';

export default createSwitchNavigator(
  {
    launch: LaunchScreen,
    app: App,
    auth: Auth,
    signUp: SignUp,
  },
  {
    initialRouteName: 'launch',
  }
);
