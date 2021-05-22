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


const EventosArtista = () => {

    useEffect(()=>{
        getEventosArtista()
      },[])

    const demonstrouInteresse = () => {
        alert("Sua manifestação foi entregue ao estabelecimento!")
    }

    const [eventos, setEventos] = useState()

    const getEventosArtista = async () => {
        try{
          const response = await api.get('/eventos')
          const eventos = response.data
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
              <Text> {eventos.item.nome} </Text>
              <Button title="Tenho interesse" onPress={demonstrouInteresse}></Button>
              <Button title="Local"></Button>
            </View>
          </TouchableOpacity>
        )
      }

    return(
    <View>
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

