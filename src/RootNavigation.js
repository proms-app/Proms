// @flow
import { createSwitchNavigator } from 'react-navigation';

import App from './pages/App';
import LaunchScreen from './pages/LaunchScreen';
import Auth from './pages/Auth';
import SignUp from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import Profile from './pages/App/Profile';
import ProfileModif from './pages/App/Profile';

export default createSwitchNavigator(
  {
    launch: LaunchScreen,
    app: App,
    auth: Auth,
    signUp: SignUp,
    signIn: SignIn,
    profile: Profile,
    profilemodif: ProfileModif
  },
  {
    initialRouteName: 'launch',
  }
);
