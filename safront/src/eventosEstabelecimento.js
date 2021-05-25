import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
    FlatList,
    Button,
    Input,
  } from 'react-native';
  import api from './services/axios';
  import AsyncStorage from '@react-native-community/async-storage';

  const EventosEstabelecimento = () => {

    useEffect(()=>{
        getEventoporid()
      },[])

   const [eventoporid, setEventoPorId] = useState()

    const getEventoporid = async () => {
      try{
        const token = await AsyncStorage.getItem('token')
        const config = {
          headers:{
            'Authorization': `Bearer ${token}`
          }
        }
        const response = await api.get('/eventoestabelecimento/2', config)
        const eventoporid = response.data
        console.log(eventoporid)
        setEventoPorId(eventoporid)
      }catch(e){
        console.log('ERROR', e)
      }
      }

    const TextEventosEstabelecimento = (eventoporid) => {
        return(
        <TouchableOpacity>
            <View style={styles.row}>
              <Text> {eventoporid.item.nome} </Text>
          </View>
          </TouchableOpacity>
        )
      }

    return(
    <View style={styles.container}>
        <Text style={styles.textArtista}> Meus Eventos </Text>
        <FlatList
        data={eventoporid}
        renderItem={TextEventosEstabelecimento}
        keyExtractor= {eventoporid => eventoporid.id_evento}>
        </FlatList>
    </View>
    )};

export default EventosEstabelecimento;

const styles = StyleSheet.create({
    textEstabelecimento: {
      color: '#836FFF',
      marginTop: 200,
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 30
  },
    textArtista: {
      color: '#8A2BE2',
      marginTop: 120,
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 30
  },
    container: {
        backgroundColor: "#A9A9A9",
        flex: 1
    },
    row: {
      flex: 1,
      paddingVertical: 25,
      paddingHorizontal: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      fontSize: 60,
      backgroundColor: '#90EE90',
      marginBottom: 10,
      borderRadius: 10,
    }
  
  })