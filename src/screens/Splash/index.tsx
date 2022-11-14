import React, { useEffect } from 'react';
import { Container } from './styles';


import LogoSvg from '@assets/Logotipo.svg';
import BrandSvg from '@assets/LogoSplash.svg';

import { Dimensions } from 'react-native'

import Animated, { useSharedValue, useAnimatedStyle, withTiming, interpolate, Extrapolate, runOnJS } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { start } from 'repl';

export function Splash() {

    const splashAnimated = useSharedValue(0);
    const brandStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(splashAnimated.value, [0, 50], [1, 0]),
            transform: [
                {
                    translateX: interpolate(splashAnimated.value,
                        [0, 50],
                        [0, -50],
                        Extrapolate.CLAMP
                    )
                }
            ]
        }
    });

    const logoStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(splashAnimated.value, [0, 25, 50], [0, .3, 1]),
            transform: [
                {
                    translateX: interpolate(splashAnimated.value,
                        [0, 50],
                        [-50, 0],
                        Extrapolate.CLAMP
                    )
                }
            ]
        }
    });

    const navigation = useNavigation();

    function startApp() {
        navigation.navigate('Login')
    }


    useEffect(() => {
        splashAnimated.value = withTiming(
            50,
            { duration: 2000 }, () => {
                'worklet' 
                runOnJS(startApp)();})
    }, [])


    return (
        <Container>
            <Animated.View style={[brandStyle, { position: 'absolute' }]}>
                <BrandSvg width={80} height={50} />
            </Animated.View>

            <Animated.View style={[logoStyle, { position: 'absolute' }]}>
                <LogoSvg width={180} height={50} />
            </Animated.View>
        </Container>
    )
}
