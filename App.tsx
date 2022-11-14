import 'react-native-gesture-handler';
import React from 'react';
import { useFonts, Archivo_500Medium, Archivo_400Regular, Archivo_700Bold } from '@expo-google-fonts/archivo';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { ThemeProvider } from 'styled-components';
import theme from '@theme/theme';
import { Routes } from '@routes/index';
import { AppProvider } from '@hooks/index';

export default function App() {

  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_500Medium, Archivo_400Regular, Archivo_500Medium, Archivo_700Bold })

  if (!fontsLoaded) {
    return;
  }

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </ThemeProvider>
  );
}
