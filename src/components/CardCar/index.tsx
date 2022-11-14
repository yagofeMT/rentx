import React from 'react'
import { CarImage, InfoTitle, About, Details, Name, Value, Container, Info, Type } from './styles';
import { Image } from 'react-native';
import { CarDTO } from 'src/dtos/CarDTO';
import { RectButtonProps } from 'react-native-gesture-handler';
import { GetIconHome, getIcons } from '@utils/getIcons';


interface Props extends RectButtonProps {
    car: CarDTO
}


export function CardCar({ car, ...rest }: Props) {    

    return (
        <Container {...rest}>
            <Details>
                <InfoTitle>{car.brand}</InfoTitle>
                <Name>{car.name}</Name>
                <About>
                    <Info>
                        <InfoTitle>{car.period}</InfoTitle>
                        <Value>{car.price.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        })}</Value>
                    </Info>
                    <Type>
                        {GetIconHome(car.fuel_type)}
                    </Type>
                </About>
            </Details>
            <CarImage
                source={{uri: car.thumbnail}}
                resizeMode='contain'
            />

        </Container>
    )
}