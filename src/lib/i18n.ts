// @flow
import moment from 'moment';
import I18n from 'react-native-i18n';
import { Platform, NativeModules } from 'react-native';

import translations from '../translations';

I18n.fallbacks = false;
I18n.translations = translations;
I18n.defaultLocale = 'en';
const supportedLanguages = ['en', 'fr'];

const setLocale = locale => {
  I18n.locale = locale;
  moment.locale(locale);
};

const getLocale = () => {
  let langRegionLocale;

  if (Platform.OS === 'android') {
    langRegionLocale = NativeModules.I18nManager.localeIdentifier || '';
  } else if (Platform.OS === 'ios') {
    const AppleLocale =
      NativeModules.SettingsManager &&
      NativeModules.SettingsManager.settings &&
      NativeModules.SettingsManager.settings.AppleLocale;
    langRegionLocale = AppleLocale || '';
  }

  let locale = langRegionLocale ? langRegionLocale.substring(0, 2) : '';
  if (!locale || !supportedLanguages.includes(locale)) {
    locale = 'en';
  }
  setLocale(locale);
};

getLocale();

export default I18n;
