/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from './Screens';
import Login from '../screen/Login';
import Register from '../screen/Register';

const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Screens.Login}>
      <Stack.Screen name={Screens.Login} component={Login} />
      <Stack.Screen name={Screens.Register} component={Register} />
    </Stack.Navigator>
  );
}

export default AuthNavigation;
