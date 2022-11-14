import { Container, InputText, IconWrapper } from './styles';
import React, { useState } from 'react'
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';

interface Props extends TextInputProps {
    iconName: React.Component<typeof Feather>["name"];
    value?:string;
}

export function Input({ iconName, value, ...rest }: Props) {
    const theme = useTheme();

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    function handleInputFocus()
    {
        setIsFocused(true)
    }

    function handleInputBlur()
    {
        setIsFocused(false)
        setIsFilled(!!value)

    }


    return (
        <Container>
            <IconWrapper isFocused={isFocused}>
                <Feather size={30}  color={isFocused || isFilled ? theme.COLORS.RED : theme.COLORS.TEXT_DETAILS} name={iconName} />
            </IconWrapper>
            <InputText {...rest} onFocus={handleInputFocus} onBlur={handleInputBlur} isFocused={isFocused} />
        </Container>
    )
}