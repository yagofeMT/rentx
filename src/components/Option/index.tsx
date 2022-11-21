import { Container, Title } from './styles';
import React from 'react'
import { TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {
    title: string;
    isActived: boolean
}


export function Option({title, isActived, ...rest} : Props) {
    return (
        <Container {...rest} isActived={isActived}>
            <Title isActived={isActived}>{title}</Title>
        </Container>
    )
}