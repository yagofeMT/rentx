import { Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { Container, TextButton } from './styles'
import { RectButtonProps } from 'react-native-gesture-handler';

interface Props extends RectButtonProps {
  text: string;
  themeButton?: 'progress' | 'sucess' | 'create';
  loading?: boolean;
}

export default function Button({ text, themeButton = 'progress', loading = false, ...rest }: Props) {
  return (
    <Container {...rest} themeButton={themeButton} loading={loading}>
      { loading ? <ActivityIndicator size = { 'small' } color = 'black'/> : (
      <TextButton themeButton={themeButton}>{text}</TextButton>
      )}
    </Container>
  )
}