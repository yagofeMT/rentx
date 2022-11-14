import Button from '@components/Button'
import { InputForm } from '@components/InputForm'
import React, { useState } from 'react'
import { Keyboard, StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback, Alert } from 'react-native'
import { Container, Title, SubTitle, InputWrapper, Forgot, ForgotText, ButtonsWrapper } from './styles'
import { useNavigation } from '@react-navigation/native'
import * as Yup from 'yup';
import { useAuth } from '@hooks/auth';
import { useEffect } from 'react'

interface FormProps {
  email: string;
  password: string;
}

interface UserProps {
  id: number;
  email: string;
  password: string;
}

export function Login() {

  const navigation = useNavigation();
  

  const [email, setEmail] = useState('');
  const [password, setPassoword] = useState('');
  const { signIn, user } = useAuth();  

  async function handleSignIn() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string()
          .required('A senha é obrigatória')
          .min(4)
      })

      await schema.validate({ email, password });
      signIn({email, password});
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Opa', error.message);
      } else {
        Alert.alert('Error na autentificação', 'Ocorreu um erro ao fazer login, verifique as credenciais')
      }
    }

    // let user: UserProps;

    // api.get(`/users/?email=${form.email}&?senha=${form.password}`)
    //   .then(response => user = response.data)
    //   .catch(error => console.log(error))
  }

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
          <Title>Estamos {'\n'}
            quase lá.</Title>
          <SubTitle>Faça seu login para começar {'\n'}
            uma experiência incrível.</SubTitle>

          <InputWrapper>
            <InputForm
              placeholder='E-mail'
              iconName="mail"
              keyboardType="email-address"
              autoCapitalize="sentences"
              autoCorrect={false}
              value={email}
              onChangeText={setEmail} />
            <InputForm
              placeholder='Senha'
              iconName="lock"
              autoCapitalize="sentences"
              autoCorrect={false}
              inputType={'password'}
              value={password}
              onChangeText={setPassoword}
            />
          </InputWrapper>
          <Forgot>
            <ForgotText>Esqueci minha senha</ForgotText>
          </Forgot>
          <ButtonsWrapper>
            <Button text='Login' enabled={password != '' && email != '' ? true : false} onPress={handleSignIn} />
            <Button text='Criar conta gratuita' themeButton='create' onPress={() => navigation.navigate('SignIn')} />
          </ButtonsWrapper>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}