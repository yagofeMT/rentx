import React, { useEffect, useState } from 'react';
import { Container, Header, HeaderText, HeaderWrapper, CarList } from './styles';
import LogoSVG from '@assets/Logotipo.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { CardCar } from '@components/CardCar';
import api from '@services/api';
import { CarDTO } from 'src/dtos/CarDTO';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

export function Home() {

  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState<CarDTO[]>([])

  const { navigate } = useNavigation();

  useEffect(() => {
    async function getCars() {
      try {
        const response = await api.get('/cars');
        setCars(response.data)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    }
    getCars()

  }, [])


  function handleCarDetails(car: CarDTO) {
    navigate('CarDetails', { car });
  }


  return (
    <Container>
      <Header>
        <HeaderWrapper>
          <LogoSVG width={RFValue(110)} height={RFValue(110)} />
          <HeaderText>Total de {cars.length} carros</HeaderText>
        </HeaderWrapper>
      </Header>
      <CarList
        data={cars}
        keyExtrator={item => item.id}
        renderItem={({ item }) =>
          <CardCar car={item} onPress={() => handleCarDetails(item)} />
        }
      />
    </Container>
  )
}