import React from 'react'
import { Container, Content, Details, AboutCar, Brand, Name, AboutPrice, Price, Accessories, AboutDiv, About, Footer } from './styles'
import { ImageSlider } from '@components/ImageSlider'
import { Accessory } from '@components/Acessory';
import Button from '@components/Button';
import { StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CarDTO } from 'src/dtos/CarDTO';
import { getIcons } from '@utils/getIcons';

interface Params {
  car: CarDTO;
}

export function CarDetails() {

  const navigation = useNavigation();
  const route = useRoute();

  const { car } = route.params as Params;  
  

  function handleScheduling() {
    navigation.navigate('Scheduling', {car})
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
        <AboutDiv>
          <About>
            {car.about}
          </About>
        </AboutDiv>
      </Content>
      <Footer>
        <Button text='Escolher período do aluguel' onPress={() => handleScheduling()} />
      </Footer>
    </Container>
  )
}