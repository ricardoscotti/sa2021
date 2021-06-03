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

  const MeusInteressados = ({navigation}) => {

    // useEffect(()=>{
    //   getEstabelecimento()
    // },[])

    // const [estabelecimentos, setEstabelecimentos] = useState()

    // const getEstabelecimento = async () => {
    //   try{
    //     const token = await AsyncStorage.getItem('token')
    //     const config = {
    //       headers: {
    //         'Authorization': `Bearer ${token}`
    //       }
    //     }
    //     const response = await api.get('/estabelecimentos', config)
    //     const estabelecimentos = response.data
    //     console.log(estabelecimentos)
    //     setEstabelecimentos(estabelecimentos)
    //   }catch(e){
    //     console.log('ERROR', e)
    //   }
    // }

    // const TextEstabelecimento = (estabelecimentos) => {
    //   return(
        
    //       <View style={styles.row}>
    //         <Text style={styles.rowText}> {estabelecimentos.item.nome} - {estabelecimentos.item.bairro} </Text>
    //         <TouchableOpacity>
    //         <Image style={styles.imagem} resizeMode='contain' source={{uri:'https://pics.freeicons.io/uploads/icons/png/18764067051529659194-512.png'}}/>
    //         </TouchableOpacity>
    //         <Text style={styles.rowText}>0</Text>
    //         <TouchableOpacity>
    //         <Image style={styles.imagem} resizeMode='contain' source={{uri:'https://cdn0.iconfinder.com/data/icons/thin-voting-awards/24/thin-0664_dislike_thumb_down_vote-512.png'}}/>
    //         </TouchableOpacity>
    //         <Text style={styles.rowText}>0</Text>
    //       </View>
        
    //   )
    // }

    return (
      <View style={styles.container}>
        
        <Text style={styles.textArtista}>Interessados</Text>
        
        {/* <FlatList
        data={estabelecimentos}
        renderItem={TextEstabelecimento}
        keyExtractor= {estabelecimentos => estabelecimentos.id_estabelecimento}>
        </FlatList> */}
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