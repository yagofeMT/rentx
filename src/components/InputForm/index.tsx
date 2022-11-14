import { Controller, Control } from 'react-hook-form';
import React from 'react'
import { TextInputProps } from 'react-native';
import { Container } from './styles';
import { Input } from '@components/Input';
import { IconProps } from '@expo/vector-icons/build/createIconSet';
import { PasswordInput } from '@components/PasswordInput';

interface Props extends TextInputProps {

    iconName: string;
    inputType?: 'normal' | 'password'
}

export function InputForm({ iconName, inputType = 'normal', ...rest }: Props) {

    return (
        <Container>

            {inputType === 'normal' ? (
                <Input {...rest} iconName={iconName} />
            ) :
            (
                <PasswordInput {...rest} iconName={iconName} />
            )
            }
        </Container>
    )
}