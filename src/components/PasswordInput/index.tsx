import { Container, InputText, IconWrapper, ChangePasswordVisibilityButton } from './styles';
import React, { useEffect, useState } from 'react'
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';

interface Props extends TextInputProps {
    iconName: React.Component<typeof Feather>['name'];
    value?: string;
}

export function PasswordInput({ iconName, value, ...rest }: Props) {

    const [visibility, setVisibility] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const theme = useTheme();

    function handleVisibility() {
        setVisibility(!visibility);
    }

    function handleInputFocus() {
        setIsFocused(true)
    }

    function handleInputBlur() {
        setIsFocused(false)
        setIsFilled(!!value)

    }


    return (
        <Container>
            <IconWrapper isFocused={isFocused}>
                <Feather size={30} color={isFocused || isFilled ? theme.COLORS.RED : theme.COLORS.TEXT_DETAILS} name={iconName} />
            </IconWrapper>
            <InputText {...rest} secureTextEntry={!visibility} onFocus={handleInputFocus} onBlur={handleInputBlur} isFocused={isFocused}/>

            <ChangePasswordVisibilityButton onPress={handleVisibility} isFocused={isFocused}>
                <Feather size={30} color={theme.COLORS.TEXT_DETAILS} name={visibility ? 'eye' : 'eye-off'} />
            </ChangePasswordVisibilityButton>
        </Container>
    )
}