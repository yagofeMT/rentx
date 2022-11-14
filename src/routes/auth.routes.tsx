import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { CarDetails } from '@screens/CarDetails'
import { Scheduling } from '@screens/Scheduling';
import { SchedulingDetails } from '@screens/SchedulingDetails';
import { Confirmation } from '@screens/Confirmation';
import { Home } from '@screens/Home';
import { MyCars } from '@screens/MyCars';
import { Splash } from '@screens/Splash';
import { Login } from '@screens/Login';
import { SignIn } from '@screens/SignIn';
import { Step2 } from '@screens/SignIn/step2';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
            <Screen name="Splash" component={Splash} />
            <Screen name="Login" component={Login} />
            <Screen name="SignIn" component={SignIn} />
            <Screen name="SignInStep2" component={Step2} />
            <Screen name="Confirmation" component={Confirmation} />
        </Navigator>
    )
}