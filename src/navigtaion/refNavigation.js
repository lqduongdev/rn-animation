import { StackActions, TabActions } from '@react-navigation/native';
import React from 'react';

export const navigationRef = React.createRef();

function navigate (name, params) {
  navigationRef.current?.navigate(name, params);
}

function push (name, params) {
  navigationRef.current?.dispatch(StackActions.push(name, params));
}

function goBack () {
  navigationRef.current?.goBack();
}

function popToTop () {
  navigationRef.current?.dispatch(StackActions.popToTop());
}

function replace (name, params) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}

function jumpTo (name, params) {
  navigationRef.current?.dispatch(TabActions.jumpTo(name, params));
}

export const NavigationService = {
  navigate,
  push,
  replace,
  goBack,
  jumpTo,
  popToTop,
};
