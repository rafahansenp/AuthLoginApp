import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from '@theme/index';
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans'
import { Routes } from '@routes/index';
import FlashMessage from 'react-native-flash-message';
import { Home } from '@screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({ OpenSans_400Regular, OpenSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded && <Routes />}
      <FlashMessage position="bottom" floating />
    </ThemeProvider>
  );
}
