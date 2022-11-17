import React from 'react';
import { AppStackRoutes } from './app.stack.routes';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';;
import { MyCars } from '@screens/MyCars';
import { useTheme } from 'styled-components';

import HomeSVG from '@assets/home.svg';
import PeopleSVG from '@assets/Pessoas.svg';
import CarSVG from '@assets/car.svg';
import { Platform } from 'react-native';
import { Profile } from '@screens/Profile';

const { Navigator, Screen } = createBottomTabNavigator();


export function AppTabRoutes() {
    const theme = useTheme();

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.COLORS.RED,
                tabBarInactiveTintColor: theme.COLORS.TEXT_DETAILS,
                tabBarShowLabel: false,
                tabBarStyle: {
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    height: 78,
                    backgroundColor: theme.COLORS.SHAPE
                }
            }}>
            <Screen
                name="Home"
                component={AppStackRoutes}
                options={{
                    tabBarIcon: (({ color }) => (
                        <HomeSVG width={24} height={24} fill={color} />
                    ))
                }} />
            <Screen
                name="MyCars"
                component={MyCars}
                options={{
                    tabBarIcon: (({ color }) => (
                        <CarSVG width={24} height={24} fill={color} />
                    ))
                }} />
            <Screen name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: (({ color }) => (
                        <PeopleSVG width={24} height={24} fill={color} />
                    ))
                }} />
        </Navigator>
    )
}