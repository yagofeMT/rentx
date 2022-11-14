import { Container, Header, InputWrapper, TitleStep, Indexs, Index } from './styles';
import React, { useState } from 'react'
import BackButton from '@components/BackButton';
import { InputForm } from '@components/InputForm';
import { Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import Button from '@components/Button';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import api from '@services/api';
import * as Yup from 'yup';

interface ParamsProps {
    name: string;
    email: string;
    driver_license: string;
}

interface UserProps {
    id?: number;
    name: string;
    email: string;
    driver_license: string;
    password: string
}

export function Step2() {

    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigation = useNavigation();

    const { params } = useRoute<RouteProp<Record<string, ParamsProps>, string>>();


    async function SignUp() {
        try {
            const schema = Yup.object().shape({
                password: Yup.string()
                .required('Digite sua senha!')
                    .min(5),
                    confirmPassword: Yup.string()
                    .required('Repita sua senha!')
                    .min(3),
                })
                
            await schema.validate({ password, confirmPassword });
            setLoading(true);

            let user: UserProps = { name: params.name, email: params.email, driver_license: params.driver_license, password }

           await api.post('/users', user).then(() => navigation.navigate('Confirmation', {title: 'Conta criada', nextScreenRoute: 'Login'})).catch((error) => Alert.alert('Opa', 'Não foi possivel cadastrar')).finally(() => setLoading(false));

        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                Alert.alert('Opa', error.message)
            } else {
                Alert.alert('Error no cadastro', 'Ocorreu um erro ao fazer o cadastros, verifique as informações passadas')
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
                            <Index />
                            <Index color={'black'} />
                        </Indexs>
                    </Header>
                    <TitleStep>2. Dados</TitleStep>
                    <InputWrapper>
                        <InputForm
                            placeholder='Senha'
                            iconName="lock"
                            autoCapitalize="sentences"
                            inputType='password'
                            autoCorrect={false}
                            value={password}
                            onChangeText={setPassword}
                        />
                        <InputForm
                            placeholder='Repetir senha'
                            iconName="lock"
                            autoCapitalize="sentences"
                            inputType='password'
                            autoCorrect={false}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                    </InputWrapper>
                    <Button loading={loading} text='Cadastrar' themeButton='sucess' enabled={password != '' && confirmPassword != '' && password === confirmPassword ? true : false} onPress={SignUp} />
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}