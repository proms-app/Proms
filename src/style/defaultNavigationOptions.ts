// @flow
import React from 'react';
import { View } from 'react-native';
import style from '../style/appStyle';

export const defaultTopNavigationOptions = {
  headerStyle: {
    backgroundColor: style.color.primary,
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
    backgroundColor: style.color.primary,
    alignItems: 'center',
    height: 20,
  },
  inactiveTintColor: style.color.secondary,
  activeTintColor: 'black',
  labelStyle: {
    fontSize: 11,
  },
};
