import React from 'react'
import { Container, Content, Title, Message, Footer } from './styles'
import LogoSvg from '@assets/Union.svg'
import DoneSvg from '@assets/Done.svg'
import { StatusBar, useWindowDimensions } from 'react-native'
import { ConfirmButton } from '@components/ConfirmButton'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'

interface Props 
{
  title: string;
  message: string;
  nextScreenRoute: string;
}

export function Confirmation() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  const { params } = useRoute<RouteProp<Record<string, Props>, string>>();

  function handleLeaseFinish() {
    navigation.navigate(params.nextScreenRoute);
  }

  return (
    <Container>
      <StatusBar barStyle={'light-content'} translucent backgroundColor={'transparent'} />
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>{params.title}</Title>

        {params.message && (
          <Message>
            {params.message}
          </Message>
        )}

      </Content>
      <Footer>
        <ConfirmButton title='OK' onPress={() => handleLeaseFinish()} />
      </Footer>
    </Container>
  )
}