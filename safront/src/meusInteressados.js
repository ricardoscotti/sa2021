import AsyncStorage from '@react-native-community/async-storage';
import api from './services/axios';

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
    Image,
  } from 'react-native';

  const MeusInteressados = ({route}) => {

    useEffect(()=>{
      getMeusInteressados()
    },[])

    const [interessados, setMeusInteressados] = useState()

    const getMeusInteressados = async () => {
      try{
        const token = await AsyncStorage.getItem('token')
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
        const response = await api.get(`/interesse/${route.params?.userData.id_estabelecimento}`, config)
        const interessados = response.data
        console.log("INTERESSADOS AQUI")
        console.log(interessados)
        setMeusInteressados(interessados)
      }catch(e){
        console.log('ERROR', e)
      }
    }

    const TextInteressados = (interessados) => {
      return(
        
          <View style={styles.row}>
            <Text style={styles.rowText}> {interessados.item.interesseList.nome} - {interessados.item.Evento.nome} </Text>
          </View>
        
      )
    }

    return (
      <View style={styles.container}>
        
        <Text style={styles.textArtista}>Interessado por Evento</Text>
        
        <FlatList
        data={interessados}
        renderItem={TextInteressados}
        keyExtractor= {interessados => interessados.id_interesse}>
        </FlatList>
      </View>
    );
  }
  
  export default MeusInteressados;

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
      marginTop: 60,
      marginEnd: 20,
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 25
  },
    container: {
        backgroundColor: "#1C1C1C",
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
      marginTop: 10
    },
    imagem: {
      width: 30,
      height: 30
    },
    rowText:{
      color: "#8A2BE2",
      fontSize: 20
    }

  
  })