import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { navigationRef } from './refNavigation';
import Home from '../modules/home/view/Home';
import Login1 from '../modules/login1/view/Login1';
import CardView1 from '../modules/cardView1/view/CardView1';
import CardView1Detail from '../modules/cardView1/view/CardView1Detail';
import { createStackNavigator } from '@react-navigation/stack';
import Tabbar1 from '../modules/tabbar1/view/Tabbar1';

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
        }}>
        <Stack.Screen name="Home" component={Home}/>

        <Stack.Screen name="Login1" component={Login1}/>

        <Stack.Screen name="CardView1" component={CardView1}/>

        <Stack.Screen name="CardView1Detail"
                      component={CardView1Detail}
                      // sharedElementsConfig={(route, otherRoute, showing) => {
                      //   const { item } = route.params;
                      //   return [`item.${item.key}.image`, `item.${item.key}.image`];
                      // }}
                      // options={{
                      //   ...TransitionPresets.ModalTransition,
                      // }}
        />

        <Stack.Screen name="Tabbar1" component={Tabbar1}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
