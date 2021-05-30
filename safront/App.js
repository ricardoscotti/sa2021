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
import Mapa from './src/Mapa';
// import EventosEstabelecimento from './src/eventosEstabelecimentos';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="login"
         component={Login}
         options={{
           title:'Login',
          headerStyle:{
            backgroundColor:'#8A2BE2'
          },
          headerTintColor:'#F8F8FF'
         }} />
        <Stack.Screen name="espacoArtista" 
        component={EspacoArtista}
        options={{
          title:'Artista',
         headerStyle:{
           backgroundColor:'#8A2BE2'
         },
         headerTintColor:'#F8F8FF'
        }} />
        <Stack.Screen name="eventosArtistas"
         component={EventosArtista}
         options={{
          title:'Eventos',
         headerStyle:{
           backgroundColor:'#8A2BE2'
         },
         headerTintColor:'#F8F8FF'
        }} />
        <Stack.Screen name="mapa" 
        component={Mapa}
        options={{
          title:'Localização',
         headerStyle:{
           backgroundColor:'#8A2BE2'
         },
         headerTintColor:'#F8F8FF'
        }} />
        <Stack.Screen name="espacoEstabelecimento"
         component={EspacoEstabelecimento}
         options={{
          title:'Estabelecimento',
         headerStyle:{
           backgroundColor:'#836FFF'
         },
         headerTintColor:'#F8F8FF'
        }} />
        {/* <Stack.Screen name="EventosEstabelecimento"
         component={EventosEstabelecimento}
         options={{
          title:'Meus eventos',
         headerStyle:{
           backgroundColor:'#836FFF'
         },
         headerTintColor:'#F8F8FF'
        }} /> */}
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

