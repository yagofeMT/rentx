import React from 'react'
import { CarImage, InfoTitle, About, Details, Name, Value, Container, Info, Type, Content, Footer, TextPeriod, DateWrapper, Date, Icon } from './styles';
import { Image } from 'react-native';
import { CarDTO } from 'src/dtos/CarDTO';
import { RectButtonProps } from 'react-native-gesture-handler';
import { GetIconHome, getIcons } from '@utils/getIcons';


interface Props extends RectButtonProps {
    data: {
        user_id: number,
        car: CarDTO,
        rentalPeriodStart: string,
        rentalPeriodEnd: string,
    }
}


export function CardCarScheduling({ data}: Props) {

    return (
        <Container>
            <Content>
                <Details>
                    <InfoTitle>{data.car.brand}</InfoTitle>
                    <Name>{data.car.name}</Name>
                    <About>
                        <Info>
                            <InfoTitle>{data.car.rent.period}</InfoTitle>
                            <Value>{data.car.rent.price.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                            })}</Value>
                        </Info>
                        <Type>
                            {GetIconHome(data.car.fuel_type)}
                        </Type>
                    </About>
                </Details>
                <CarImage
                    source={{ uri: data.car.thumbnail }}
                    resizeMode='contain'
                />
            </Content>
            <Footer>
                <TextPeriod>PERÍODO</TextPeriod>

                <DateWrapper>
                    <Date>{data.rentalPeriodStart}</Date>
                    <Icon name="long-arrow-right" size={20} />
                    <Date>{data.rentalPeriodEnd}</Date>
                </DateWrapper>
            </Footer>
        </Container>
    )
}