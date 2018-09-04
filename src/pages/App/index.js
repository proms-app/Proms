// @flow
import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Home from './Home';

const ModalNavigator = createStackNavigator(
  {
    home: {
      screen: Home,
    },
  },
  {
    initialRouteName: 'home',
    mode: 'modal',
  }
);

export default ModalNavigator;
