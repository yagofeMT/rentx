import BackButton from '@components/BackButton'
import { StatusBar, Alert } from 'react-native'
import Button from '@components/Button'
import { Calendar, DayProps, MarkedDateProps } from '@components/Calendar'
import React, { useState } from 'react'
import { Container, DateFilter, Header, Icon, DateValue, InputView, PlaceholderDate, TextHeader, Content, Footer } from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { generateInterval } from '@components/Calendar/generateInterval'
import { format } from 'date-fns';
import { getPlatformDate } from '@utils/getPlatformDate'
import { CarDTO } from 'src/dtos/CarDTO'

export interface RentalPeriodProps {
  start: number;
  startFormatted: string;
  end: number;
  endFormatted: string;
}

interface Params {
  car: CarDTO;
}

export function Scheduling() {

  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodProps>({} as RentalPeriodProps);
  const route = useRoute();

  const { car } = route.params as Params;

  const navigation = useNavigation();

  function handleSchedulingDetails() {
    navigation.navigate("SchedulingDetails", { car, rentalPeriod, markedDates: Object.keys(markedDates) });
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;

    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      start: start.timestamp,
      end: end.timestamp,
      startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
      endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy'),
    })
  }

  return (
    <Container>
      <StatusBar translucent barStyle={'light-content'} backgroundColor='transparent' />
      <Header>
        <BackButton themeIcon='light'/>
        <TextHeader>Escolha uma {'\n'}
          data de início e  {'\n'}
          fim do aluguel</TextHeader>

        <DateFilter>
          <InputView>
            <PlaceholderDate>De</PlaceholderDate>
            <DateValue selected={!!rentalPeriod.startFormatted}>{rentalPeriod.startFormatted}</DateValue>
          </InputView>

          <Icon name="long-arrow-right" size={24} />

          <InputView>
            <PlaceholderDate>Até</PlaceholderDate>
            <DateValue selected={!!rentalPeriod.endFormatted}>{rentalPeriod.endFormatted}</DateValue>
          </InputView>
        </DateFilter>
      </Header>
      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>
      <Footer>
        <Button text='Confimar' enabled={!!rentalPeriod.startFormatted} onPress={() => handleSchedulingDetails()} />
      </Footer>
    </Container>
  )
}
