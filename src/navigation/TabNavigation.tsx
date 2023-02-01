/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Screens } from './Screens';
import Profile from '../screen/Profile';
import Icon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';
// import FonttyIcon from 'react-native-vector-icons/FontAwesome';
import Chat from '../screen/Chat';
// import Message from '../screen/Message';
import colors from '../themes/colors';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator
            initialRouteName={Screens.Chat}
            screenOptions={{
                tabBarActiveTintColor: colors.blueMain,
                tabBarInactiveTintColor: colors.inActive,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colors.white,
                    height: 45,
                },
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name={Screens.Chat}
                component={Chat}
                options={{
                    title: 'Chat',
                    tabBarIcon: ({ focused }) => focused ? (
                        <IonIcon name="chatbubble-ellipses-outline" size={24} color={colors.blueMain} />
                    ) :
                        <IonIcon name="chatbubble-ellipses-outline" size={24} color={colors.inActive} />,
                }}
            />
            {/* <Tab.Screen
                name={Screens.Profile}
                component={Profile}
                options={{
                    title: 'Queue',
                    tabBarIcon: ({ focused }) => focused ? (
                        <EntyIcon name='list' size={24} color={'#fb5b5a'} />
                    ) :
                        <EntyIcon name='list' size={24} color={'white'} />
                }}
            /> */}
            <Tab.Screen
                name={Screens.Profile}
                component={Profile}
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ focused }) => focused ? (
                        <Icon name="user" size={24} color={colors.blueMain} />
                    ) :
                        <Icon name="user" size={24} color={colors.inActive} />,
                }}
            />
        </Tab.Navigator >
    );
}
