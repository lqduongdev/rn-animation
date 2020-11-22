import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './refNavigation';
import Home from '../modules/home/view/Home';
import Login1 from '../modules/login1/view/Login1';

const Stack = createStackNavigator();

export default function RootNavigation () {

  const config = {
    animation: 'spring',
    config: {
      stiffness: 450,
      damping: 100,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        headerMode={'none'}
        screenOptions={{
          // gestureResponseDistance: {
          //   horizontal: SCREEN_WIDTH * 0.8,
          // },
          transitionSpec: {
            open: config,
            close: config,
          },
        }}>
        <Stack.Screen name="Home" component={Home}/>


        <Stack.Screen name="Login1" component={Login1}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}
