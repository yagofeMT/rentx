import { StatusBar, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Container, Header, TextHeader, TextSubTitle, CarList, Content } from './styles'
import BackButton from '@components/BackButton'
import { useNavigation } from '@react-navigation/native';
import api from '@services/api';
import { CarDTO } from 'src/dtos/CarDTO';
import { CardCarScheduling } from '@components/CardCarScheduling';


export function MyCars() {

    const [cars, setCars] = useState<CarDTO[]>([])
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation();

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await api.get('/schedules_byuser/?user_id=1');
                setCars(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchCars();

    }, [])

    return (
        <Container>
            <StatusBar translucent barStyle={'light-content'} backgroundColor='transparent' />
            <Header>
                <BackButton themeIcon='light'/>
                <TextHeader>Seus agendamentos,{'\n'}
                    estão aqui.</TextHeader>
                <TextSubTitle>Conforto, segurança e praticidade.</TextSubTitle>
            </Header>
            <Content>
                <CarList
                    data={cars}
                    keyExtrator={item => item.car.id}
                    renderItem={({ item }) =>
                        <CardCarScheduling data={item} />
                    }
                />
            </Content>
        </Container>
    )
}