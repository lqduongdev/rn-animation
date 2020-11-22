/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View } from 'react-native';

import { enableScreens } from 'react-native-screens';
import RootNavigation from './navigtaion/RootNavigation';

enableScreens();

class App extends React.PureComponent {

  render () {
    return (
      <View style={{ flex: 1 }}>
        <RootNavigation/>
      </View>
    );
  }
}

export default App;

// a wrapper around console.log to help checking and logging under __DEV__ mode
global.devLog = (tag, message) => {
  if (__DEV__) {
    if (!message) {
      console.log(tag);
    }
    else {
      console.log(tag, message);
    }
  }
};
