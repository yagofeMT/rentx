import { TouchableOpacityProps} from 'react-native'
import React from 'react'
import { BackIcon, Container } from './styles'
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'

interface Props extends TouchableOpacityProps {
    themeIcon?: 'light' | 'black'
}

export default function BackButton({ themeIcon = 'black', ...rest }: Props) {

    const theme = useTheme();
    const navigation = useNavigation();

    return (
        <Container {...rest} onPress={() => navigation.goBack()} >
            <BackIcon name="chevron-back" size={20} color={themeIcon === 'black' ? 'black' : theme.COLORS.SHAPE} />
        </Container>
    )
}