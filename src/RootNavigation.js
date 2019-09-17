// @flow
import { createSwitchNavigator } from "react-navigation";

import App from "./pages/App";
import { AuthLoadingScreen } from "./pages/LaunchScreen";
import Auth from "./pages/Auth";
import SignUp from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";

export default createSwitchNavigator(
  {
    launch: AuthLoadingScreen,
    app: App,
    auth: Auth,
    signUp: SignUp,
    signIn: SignIn
  },
  {
    initialRouteName: "launch"
  }
);
