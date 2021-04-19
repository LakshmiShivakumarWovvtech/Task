/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';

import {Navigation} from './src/Navigation';

import Store from './src/store/Store';

const RNRedux = () => (
  <Provider store={Store}>
    <Navigation />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
