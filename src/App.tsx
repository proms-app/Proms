// @flow
import React, { Component } from 'react';

import RootNavigator from './RootNavigation';
import { MyContextProvider } from './modules/me';
type PropsType = {};

class App extends Component<PropsType> {
  render() {
    return (
      <MyContextProvider>
        <RootNavigator />
      </MyContextProvider>
    );
  }
}

export default App;
