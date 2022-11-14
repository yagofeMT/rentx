import React, { useState } from 'react'
import {
  Container,
  Content,
  Details,
  AboutCar,
  Brand,
  Name,
  AboutPrice,
  Price,
  Accessories,
  About,
  Footer,
  AboutDate,
  CalendarIcon,
  DivIcon,
  DateAllocation,
  DateTitle,
  Date,
  Arrow,
  TotalWrapper,
  TotalDetails,
  ValueDiary,
  TitleTotal,
  Total,
  Loading
} from './styles'
import { ImageSlider } from '@components/ImageSlider'
import { Accessory } from '@components/Acessory';
import Button from '@components/Button';
import { StatusBar, Alert, ActivityIndicator } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import { RentalPeriodProps } from '@screens/Scheduling';
import { CarDTO } from 'src/dtos/CarDTO';
import { CreateRental } from 'src/dtos/CreateRental';
import { getIcons } from '@utils/getIcons';
import { differenceInDays, format } from 'date-fns'
import api from '@services/api';
import { useAuth } from '@hooks/auth';

interface Params {
  car: CarDTO;
  rentalPeriod: RentalPeriodProps,
  markedDates: string[]
}


export function SchedulingDetails() {

  const navigation = useNavigation();
  const route = useRoute();

  const [loading, setLoading] = useState(false);
  const { car, rentalPeriod, markedDates } = route.params as Params;
  const { user } = useAuth();


  async function handleSchedulingSucess() {
    setLoading(true);
      
    const rental : CreateRental = {user_id: user.id, car_id: car.id, start_date: rentalPeriod.startFormatted, end_date: rentalPeriod.endFormatted, total: (car.price * DurationAloccation)};

    await api.post('/rentals', rental).then((response) => console.log(response)).catch((error) => console.log(error)).finally(() => setLoading(false));

  }

  let DurationAloccation = differenceInDays(rentalPeriod.end, rentalPeriod.start);

  if (DurationAloccation == 0) {
    DurationAloccation += 1;
  }

  return (
    <Container>

      <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} />
      <ImageSlider BackFunction={() => navigation.goBack()} photos={car.photos} />
      <Content>
        <Details>
          <AboutCar>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </AboutCar>
          <AboutPrice>
            <Brand>{car.period}</Brand>
            <Price>R$ {car.price}</Price>
          </AboutPrice>
        </Details>
        <Accessories>
          {car.accessories.map(accessor =>
            <Accessory key={accessor.name} name={accessor.name} icon={getIcons(accessor.type)} />
          )}
        </Accessories>
        <About>
          <AboutDate>
            <DivIcon>
              <CalendarIcon name="calendar-outline" size={30} />
            </DivIcon>
            <DateAllocation>
              <DateTitle>DE</DateTitle>
              <Date>{rentalPeriod.startFormatted}</Date>
            </DateAllocation>
            <Arrow name="keyboard-arrow-right" size={24} />
            <DateAllocation>
              <DateTitle>ATÉ</DateTitle>
              <Date>{rentalPeriod.endFormatted}</Date>
            </DateAllocation>
          </AboutDate>
          <TotalWrapper>
            <TotalDetails>
              <TitleTotal>Total</TitleTotal>
              <ValueDiary>R$ {car.price} x {DurationAloccation} diárias</ValueDiary>
            </TotalDetails>
            <Total>R$  {car.price * DurationAloccation} </Total>
          </TotalWrapper>
        </About>
      </Content>
      <Footer>
        <Button text='Alugar agora' themeButton='sucess' enabled={!loading} loading={loading} onPress={() => handleSchedulingSucess()} />
      </Footer>
    </Container>
  )
}