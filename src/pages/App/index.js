import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import I18n from 'lib/i18n';

import {
  defaultTopNavigationOptions,
  defaultBottomNavigationOptions,
} from '../../style/defaultNavigationOptions';
import Home from './Home';
import Profile from './Profile';
import Newsfeed from './Newsfeed';
import Account from './Account';

const TabNavigator = createBottomTabNavigator(
  {
    account: {
      screen: Account,
      navigationOptions: {
        title: I18n.t(`account.iconName`),
      },
    },
    newsfeed: {
      screen: Newsfeed,
      navigationOptions: {
        title: I18n.t(`newsfeed.iconName`),
      },
    },
    home: {
      screen: Home,
      navigationOptions: {
        title: I18n.t(`home.iconName`),
      },
    },
    profile: {
      screen: Profile,
      navigationOptions: {
        title: I18n.t(`profile.iconName`),
      },
    },
  },
  {
    initialRouteName: 'home',
    tabBarOptions: {
      ...defaultBottomNavigationOptions,
    },
  }
);

TabNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const headerTitle = routeName.toLowerCase();
  const title = I18n.t(`${headerTitle}.tabName`);
  return {
    title,
    headerRight: null,
  };
};

const CardNavigator = createStackNavigator(
  {
    main: {
      screen: TabNavigator,
    },
  },
  {
    initialRouteName: 'main',
    navigationOptions: {
      ...defaultTopNavigationOptions,
    },
  }
);

const ModalNavigator = createStackNavigator(
  {
    main: {
      screen: CardNavigator,
    },
  },
  {
    initialRouteName: 'main',
    mode: 'modal',
    navigationOptions: {
      header: null,
    },
  }
);

export default ModalNavigator;
