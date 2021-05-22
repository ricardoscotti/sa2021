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

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="inicial" component={Inicial} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="espacoArtista" component={EspacoArtista} />
        <Stack.Screen name="eventosArtistas" component={EventosArtista} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

