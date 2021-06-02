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
  } from 'react-native';
import api from './services/axios';
import AsyncStorage from '@react-native-community/async-storage';


const EventosArtista = ({navigation}) => {

    useEffect(()=>{
        getEventosArtista()
      },[])

    const demonstrouInteresse = () => {
        alert("Sua manifestação foi entregue ao estabelecimento!")
    }

    const [eventos, setEventos] = useState()
    

    const getEventosArtista = async () => {
        try{
          const token = await AsyncStorage.getItem('token')
          const config = {
            headers:{
              'Authorization': `Bearer ${token}`
            }
          }
          const response = await api.get('/eventos', config)
          const eventos = response.data
          
          // console.log(eventos[5].Estabelecimento.lat)ewewewew
          console.log(eventos)
          setEventos(eventos)
          
        }catch(e){
          console.log('ERROR', e)
        }
      }
    
    const TextEventosArtista = (eventos) => {
        return(
          <TouchableOpacity>
            <View style={styles.row}>
              <Text style={styles.textEventos} > {eventos.item.nome} </Text>
              <Button title="Tenho interesse" color='#8A2BE2'  onPress={demonstrouInteresse}></Button>
              <Button title="Local" color='#8A2BE2'
              onPress={()=> {navigation.navigate('mapa',{nome:eventos.item.nome,lat:eventos.item.lat,long:eventos.item.longi, id_evento: eventos.item.id_evento})}} >
              </Button>
            </View>
          </TouchableOpacity>
        )
      }

    return(
    <View style={styles.container}>
        <Text style={styles.textArtista}> Eventos </Text>
        <FlatList
        data={eventos}
        renderItem={TextEventosArtista}
        keyExtractor= {eventos => eventos.id_evento}>
        </FlatList>
    </View>
    )};

export default EventosArtista;

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
      marginTop: 40,
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 30
  },
    container: {
        backgroundColor: "#1C1C1C",
        flex: 1
    },
    row: {
      flex: 1,
      paddingVertical: 25,
      paddingHorizontal: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
      fontSize: 60,
      backgroundColor: '#90EE90',
      borderRadius: 10,
      marginTop: 10,
      
    },
    textEventos: {
      
      color:'#8A2BE2',
      fontSize: 20,
      
    },

  
  })

