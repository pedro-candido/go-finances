import React from 'react';
import { StatusBar } from 'react-native';

import { Container } from './App.styles';
import Dashboard from './src/screens/Dashboard';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/theme';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import AppLoading from 'expo-app-loading';
import Register from './src/screens/Register';
import CategorySelect from './src/screens/CategorySelect';
import Routes from './src/routes/app.routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar barStyle={'light-content'} />
        <Routes />
      </Container>
    </ThemeProvider>
  );
}
