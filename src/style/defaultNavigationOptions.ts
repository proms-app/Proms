// @flow
import React from 'react';
import { View } from 'react-native';
import appStyle from '../style/appStyle';

export const defaultTopNavigationOptions = {
  headerStyle: {
    backgroundColor: appStyle.color.primary,
  },
  headerTitleStyle: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
};

export const defaultBottomNavigationOptions = {
  style: {
    backgroundColor: appStyle.color.primary,
    alignItems: 'center',
    height: 20,
  },
  inactiveTintColor: appStyle.color.secondary,
  activeTintColor: 'black',
  labelStyle: {
    fontSize: 11,
  },
};
