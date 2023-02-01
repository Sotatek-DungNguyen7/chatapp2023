/* eslint-disable prettier/prettier */
import React from 'react';
import { Screens } from './Screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import AuthNavigation from './AuthNavigation';
import Message from '../screen/Message';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../redux/reducers';
// import AddATM from '../screen/AddATM';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {

    // const authState = useSelector((state: RootState) => {
    //     return state.authReducer.loggedIn;
    // });

    // switch (authState) {
    //     case false:
    //         return (
    //             <Stack.Navigator
    //                 screenOptions={{ headerShown: false }}
    //                 initialRouteName={Screens.AuthNavigation}
    //             >
    //                 <Stack.Screen name={Screens.AuthNavigation} component={AuthNavigation} />
    //             </Stack.Navigator>
    //         );
    //     case true:
    //         return (
    //             <Stack.Navigator
    //                 screenOptions={{ headerShown: false }}
    //                 initialRouteName={Screens.TabNavigation}
    //             >
    //                 <Stack.Screen name={Screens.TabNavigation} component={TabNavigation} />
    //                 {/* <Stack.Screen name={Screens.AddATM} component={AddATM} /> */}
    //             </Stack.Navigator>
    //         );
    //     default:
    //         return null;
    // }

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={Screens.TabNavigation}
        >
            <Stack.Screen name={Screens.AuthNavigation} component={AuthNavigation} />
            <Stack.Screen name={Screens.TabNavigation} component={TabNavigation} />
            <Stack.Screen name={Screens.Message} component={Message} />
        </Stack.Navigator>
    );
}
