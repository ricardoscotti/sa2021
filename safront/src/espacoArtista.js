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

  const EspacoArtista = ({navigation, route}) => {

    useEffect(()=>{
      getEstabelecimento()
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
    const [estabelecimentos, setEstabelecimentos] = useState()

    const getEstabelecimento = async () => {
      try{
        const token = await AsyncStorage.getItem('token')
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
        const response = await api.get('/estabelecimentos', config)
        const estabelecimentos = response.data
        console.log(estabelecimentos)
        setEstabelecimentos(estabelecimentos)
      }catch(e){
        console.log('ERROR', e)
      }
    }

    const avaliacao = async (type, estabelecimento) => {
      try{
        const token = await AsyncStorage.getItem('token')
        const config = {
          headers:{
            'Authorization': `Bearer ${token}`
          }
        }
        const obj = {
          id_artista: route.params?.userData.id_artista,
          id_estabelecimento: estabelecimento.item.id_estabelecimento,
          avaliacao: type
        }
        const response = await axios.post('http://localhost:3334/avaliacaoestabelecimento', obj, config)
        console.log(response.data)
        await getEstabelecimento()
      }catch(e){

      }
  }

    const TextEstabelecimento = (estabelecimentos) => {
      const likes = estabelecimentos.item.avaliacao.reduce((acumulador,item)=>{
        if(item==='L'){
          acumulador++
        }
        return acumulador
      },0)
      const dislikes = estabelecimentos.item.avaliacao.reduce((acumulador,item)=>{
        if(item==='D'){
          acumulador++
        }
        return acumulador
      },0)

      return(
        
          <View style={styles.row}>
            <Text style={styles.rowText}> {estabelecimentos.item.nome} - {estabelecimentos.item.bairro} </Text>
            <TouchableOpacity onPress={()=>avaliacao('L', estabelecimentos)}>
            <Image style={styles.imagem} resizeMode='contain' source={{uri:'https://pics.freeicons.io/uploads/icons/png/18764067051529659194-512.png'}}/>
            </TouchableOpacity>
            <Text style={styles.rowText}>{likes}</Text>
            <TouchableOpacity onPress={()=>avaliacao('D', estabelecimentos)}>
            <Image style={styles.imagem} resizeMode='contain' source={{uri:'https://cdn0.iconfinder.com/data/icons/thin-voting-awards/24/thin-0664_dislike_thumb_down_vote-512.png'}}/>
            </TouchableOpacity>
            <Text style={styles.rowText}>{dislikes}</Text>
          </View>
        
      )
    }

    return (
      <View style={styles.container}>
          <TouchableOpacity>
        <Text style={styles.textArtista} onPress={()=> {navigation.navigate('eventosArtistas', {userData: route.params?.userData})}}>Clique aqui para ver os eventos</Text>
        </TouchableOpacity>
        <FlatList
        data={estabelecimentos}
        renderItem={TextEstabelecimento}
        keyExtractor= {estabelecimentos => estabelecimentos.id_estabelecimento}>
        </FlatList>
      </View>
    );
  }
  
  export default EspacoArtista;

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