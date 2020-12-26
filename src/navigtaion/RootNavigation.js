import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {navigationRef} from './refNavigation';
import Home from '../modules/home/view/Home';
import Login1 from '../modules/login1/view/Login1';
import CardView1Detail from '../modules/cardView1/view/CardView1Detail';
import {TransitionPresets} from '@react-navigation/stack';
import TabbarStack from './stack/TabbarStack';
import groupStack from './groupStack';
import CardStack from './stack/CardStack';
import ProcessDownload1 from '../modules/processDownload1/view/ProcessDownload1';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import CardView3Detail from '../modules/cradView3/view/CardView3Detial';

const Stack = createSharedElementStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        headerMode={'none'}
        screenOptions={{
          animationTypeForReplace: 'pop',
          // gestureResponseDistance: {
          //   horizontal: SCREEN_WIDTH * 0.8,
          // },
        }}>
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Login1" component={Login1} />

        <Stack.Screen
          name="CardView1Detail"
          component={CardView1Detail}
          // sharedElementsConfig={(route, otherRoute, showing) => {
          //   const { item } = route.params;
          //   return [`item.${item.key}.image`, `item.${item.key}.image`];
          // }}
          // options={{
          //   ...TransitionPresets.ModalTransition,
          // }}
        />
        <Stack.Screen
          name="CardView3Detail"
          component={CardView3Detail}
          sharedElementsConfig={(route, otherRoute, showing) => {
            const {item} = route.params;
            return [{id: `itemPhoto.${item.key}`}];
          }}
          options={{
            headerShown: false,
            gestureEnabled: false,
            ...TransitionPresets.ModalTransition,
          }}
        />

        {groupStack(Stack, CardStack)}

        {groupStack(Stack, TabbarStack)}

        <Stack.Screen name="ProcessDownload1" component={ProcessDownload1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
