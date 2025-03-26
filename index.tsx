
import React from 'react';
import * as RN from 'react-native';
import App from './App.tsx'

RN.AppRegistry.registerComponent('App', () => App);

RN.AppRegistry.runApplication('App', {
  rootTag: document.getElementById('root'),
});
