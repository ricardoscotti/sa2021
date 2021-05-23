import React from 'react';
import Login from './src/login';
import Inicial from './src/inicial'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import EspacoArtista from './src/espacoArtista';
import EventosArtista from './src/eventosArtista';
import EspacoEstabelecimento from './src/espacoEstabelecimento';
import EventoEstabelecimento from './src/eventosEstabelecimento';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="espacoArtista" component={EspacoArtista} />
        <Stack.Screen name="eventosArtistas" component={EventosArtista} />
        <Stack.Screen name="espacoEstabelecimento" component={EspacoEstabelecimento} />
        <Stack.Screen name="eventosEstabelecimento" component={EventoEstabelecimento} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

