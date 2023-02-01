/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';

const AppContainer = () => (
    <NavigationContainer>
        {/* <AppNavigation /> */}
        <AuthNavigation />
    </NavigationContainer>
);

export default AppContainer;