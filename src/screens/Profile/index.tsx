import BackButton from '@components/BackButton';
import Button from '@components/Button';
import { InputForm } from '@components/InputForm';
import React, { useEffect, useState } from 'react'
import { Container, HeaderWrapper, Header, ImageWrapper, Image, Title, SignOut, CameraImg, Content, Options, Form } from './styles';
import { Feather } from '@expo/vector-icons'
import { useAuth } from '@hooks/auth';
import { Option } from '@components/Option';
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import api from '@services/api';
import * as Yup from 'yup';

export function Profile() {
    const { user, signOut, updateUser } = useAuth();
    const [step, setStep] = useState(0);

    const [name, setName] = useState(user.name)
    const [driverLicense, setDriverLicense] = useState(user.driver_license)
    const [avatar, setAvatar] = useState(user.avatar)
    const [loading, setLoading] = useState(false);

    async function handleSelectAvatar() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {

            setAvatar(result.assets[0].uri)
        }
    }


    async function handleUpdateUser() {
        try {
            setLoading(true)
            const schema = Yup.object().shape({
                driverLicense: Yup.string()
                    .required('CNH é obrigatórioa'),
                name: Yup.string()
                    .required('Nome é obrigatórioa')
            });

            const data = { name, driverLicense }
            await schema.validate(data);

            updateUser({ user_id: user.user_id, name: name, driver_license: driverLicense, avatar: avatar, email: user.email, token: user.token, id: user.id }).finally(() => setLoading(false));
            Alert.alert('Perfil atualizado!')

        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                Alert.alert('Opa', error.message);
            } else {
                Alert.alert('Não foi possivel atualizar o perfil');
            }
        }
    }

    return (
        <KeyboardAvoidingView behavior="position" enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <HeaderWrapper>
                        <Header>
                            <BackButton themeIcon='light' />
                            <Title>Editar Perfil</Title>
                            <SignOut onPress={signOut}>
                                <Feather size={20} color='white' name='power' />
                            </SignOut>
                        </Header>
                        <ImageWrapper>
                            {avatar && (
                                <Image source={{ uri: avatar }} />
                            )}
                            <CameraImg onPress={handleSelectAvatar}>
                                <Feather name='camera' size={20} color='white' />
                            </CameraImg>
                        </ImageWrapper>
                    </HeaderWrapper>
                    <Content>
                        <Options>
                            <Option title='Dados' isActived={step === 0} onPress={() => setStep(0)} />
                            <Option title='Redefinir Senha' isActived={step === 1} onPress={() => setStep(1)} />
                        </Options>
                        <Form>
                            {step === 0 ? (
                                <>
                                    <InputForm iconName='user' placeholder='Nome' onChange={() => setName} defaultValue={name} />
                                    <InputForm iconName='mail' placeholder='E-mail' defaultValue={user.email} />
                                    <InputForm iconName='credit-card' placeholder='CNH' onChange={() => setDriverLicense} defaultValue={driverLicense} />
                                    <Button text='Confirmar Alteração' onPress={handleUpdateUser} loading={loading} />

                                </>
                            ) : (
                                <>
                                    <InputForm iconName='lock' inputType='password' placeholder='Senha atual' />
                                    <InputForm iconName='lock' inputType='password' placeholder='Nova senha' />
                                    <InputForm iconName='lock' inputType='password' placeholder='Repetir nova senha' />
                                    <Button text='Confirmar Alteração' onPress={handleUpdateUser} loading={loading} />
                                </>
                            )}
                        </Form>
                    </Content>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}