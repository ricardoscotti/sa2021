import AsyncStorage from '@react-native-community/async-storage';
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
  import api from './services/axios';

  const EspacoEstabelecimento = ({navigation, route}) => {

    useEffect(()=>{
      getArtista()
    },[])

    const [artistas, setArtistas] = useState()
    
    

    const getArtista = async () => {
      try{
        const token = await AsyncStorage.getItem('token')
        const config = {
          headers:{
            'Authorization': `Bearer ${token}`
          }
        }
        const response = await api.get('/artistas', config)
        const artistas = response.data
        console.log(artistas)
        setArtistas(artistas)
      }catch(e){
        console.log('ERROR', e)
      }
    }

    const TextArtista = (artistas) => {
      return(
        
          <View style={styles.row}>
            <Text> {artistas.item.id_artista} </Text>
            <TouchableOpacity>
            <Image style={styles.imagem} resizeMode='contain' source={{uri:'https://pics.freeicons.io/uploads/icons/png/18764067051529659194-512.png'}}/>
            </TouchableOpacity>
            <Text> {artistas.item.avaliacao.length} </Text>
            <TouchableOpacity>
            <Image style={styles.imagem} resizeMode='contain' source={{uri:'https://cdn0.iconfinder.com/data/icons/thin-voting-awards/24/thin-0664_dislike_thumb_down_vote-512.png'}}/>
            </TouchableOpacity>
            <Text>0</Text>
          </View>
        
      )
    }

    return (
      <View style={styles.container}>
          <TouchableOpacity>
        <Text style={styles.textArtista} onPress={()=> {navigation.navigate('eventosEstabelecimento', {userData: route.params?.userData})}}>Gerenciar meus eventos</Text>
        </TouchableOpacity>
        <FlatList
        data={artistas}
        renderItem={TextArtista}
        keyExtractor= {artistas => artistas.id_artista}>
        </FlatList>
      </View>
    );
  }
  
  export default EspacoEstabelecimento;

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
    },
    imagem: {
      width: 30,
      height: 30
    }
  
  })