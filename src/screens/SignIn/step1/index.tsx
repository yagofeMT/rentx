import { Container, Header, InputWrapper, TitleStep, Indexs, Index} from './styles';
import React, { useState } from 'react'
import BackButton from '@components/BackButton';
import { InputForm } from '@components/InputForm';
import { Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import Button from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';


export function Step1() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [CNH, setCNH] = useState('');

    const navigation = useNavigation();

    async function NextStep()
    {
        try {
            const schema = Yup.object().shape({
                nome: Yup.string()
                    .required('Digite seu nome!')
                    .min(3),
                email: Yup.string()
                    .email('Digite um e-mail válido')
                    .required('Digite seu e-mail'),
                CNH: Yup.number()
                    .required('Digite sua CNH')
                    .min(4)
            })

            await schema.validate({nome,email,CNH});
            navigation.navigate('SignInStep2', {name: nome, email: email, driver_license: CNH})
        } catch (error) {
            if(error instanceof Yup.ValidationError)
            {
                Alert.alert('Opa', error.message)
            } else
            {
                Alert.alert('Error no processo de cadastro', 'Ocorreu um erro e devido a ele não avançaremos para o proximo passo, verifique os dados passados!')
            }
        }

    }

    return (
        <KeyboardAvoidingView behavior='position' enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Header>
                        <BackButton />
                        <Indexs>
                            <Index color="black"/>
                            <Index/>                       
                        </Indexs>
                    </Header>
                    <TitleStep>1. Dados</TitleStep>
                    <InputWrapper>
                        <InputForm
                            placeholder='Nome'
                            iconName="user"
                            autoCapitalize="sentences"
                            autoCorrect={false}
                            value={nome}
                            onChangeText={setNome}
                        />
                        <InputForm
                            placeholder='E-mail'
                            iconName="mail"
                            keyboardType="email-address"
                            autoCapitalize="sentences"
                            autoCorrect={false}
                            value={email}
                            onChangeText={setEmail}
                        />
                                         <InputForm
                            placeholder='CNH'
                            iconName="credit-card"
                            keyboardType='numeric'
                            autoCapitalize="sentences"
                            autoCorrect={false}
                            value={CNH}
                            onChangeText={setCNH}
                        />
                    </InputWrapper>
                    <Button text='Próximo' enabled={nome != '' && CNH != '' && email != '' ? true : false} onPress={NextStep}/>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}