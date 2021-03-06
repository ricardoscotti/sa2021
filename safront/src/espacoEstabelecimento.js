import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
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
    BackHandler, Alert
  } from 'react-native';
  import api from './services/axios';

  const EspacoEstabelecimento = ({navigation, route}) => {

    useEffect(()=>{
      getArtista()
    },[])
    useEffect(() => {
      const backAction = () => {
        Alert.alert("Alerta", "Você deseja sair desta conta?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
          },
          { text: "YES", onPress: () => navigation.navigate('login') }
        ]);
        return true;
      };
  
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );
  
      return () => backHandler.remove();
    }, []);
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


    const avaliacao = async (type, artista) => {
        try{
          const token = await AsyncStorage.getItem('token')
          const config = {
            headers:{
              'Authorization': `Bearer ${token}`
            }
          }
          const obj = {
            id_estabelecimento: route.params?.userData.id_estabelecimento,
            id_artista: artista.item.id_artista,
            avaliacao: type
          }
          const response = await axios.post('http://localhost:3334/avaliacaoartista', obj, config)
          console.log(response.data)
          await getArtista()
        }catch(e){

        }
    }


    const TextArtista = (artistas) => {
      
      const likes = artistas.item.avaliacao.reduce((acumulador,item)=>{
        if(item==='L'){
          acumulador++
        }
        return acumulador
      },0)
      const dislikes = artistas.item.avaliacao.reduce((acumulador,item)=>{
        if(item==='D'){
          acumulador++
        }
        return acumulador
      },0)
      return(
        
          <View style={styles.row}>
            <Text style={styles.rowText}> {artistas.item.nome} </Text>
            <TouchableOpacity onPress={()=>avaliacao('L', artistas)}>
            <Image style={styles.imagem} resizeMode='contain' source={{uri:'https://pics.freeicons.io/uploads/icons/png/18764067051529659194-512.png'}} />
            </TouchableOpacity>
            <Text style={styles.rowText}> {likes} </Text>
            <TouchableOpacity onPress={()=>avaliacao('D', artistas)}>
            <Image style={styles.imagem} resizeMode='contain' source={{uri:'https://cdn0.iconfinder.com/data/icons/thin-voting-awards/24/thin-0664_dislike_thumb_down_vote-512.png'}}/>
            </TouchableOpacity>
            <Text style={styles.rowText}>{dislikes}</Text>
          </View>
        
      )
    }

    return (
      <View style={styles.container}>
          <TouchableOpacity>

        <Text style={styles.textArtista} onPress={()=> {navigation.navigate('EventosEstabelecimento', {userData: route.params?.userData})}}>Gerenciar meus eventos</Text>
        <Text style={styles.textArtista} onPress={()=> {navigation.navigate('MeusInteressados', {userData: route.params?.userData})}}>Interessados nos meus eventos</Text>



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
      marginTop: 30,
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
    },
    rowText:{
      color: "#8A2BE2",
      fontSize: 20
    },
    rowText:{
      color: "#8A2BE2",
      fontSize: 20
    },
    avaliado:{
      backgroundColor: "#A9A9A9"
    }
  
  })