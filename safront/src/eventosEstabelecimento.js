import React, { useState, useEffect } from 'react';
import TextInputMask from 'react-native-text-input-mask';
import axios from 'axios'
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
    Modal,
    TextInput,
    Alert
  } from 'react-native';
  import api from './services/axios';
  import AsyncStorage, { useAsyncStorage } from '@react-native-community/async-storage';

  const EventosEstabelecimento = ({route}) => {

    useEffect(()=>{
        const func = async () => await  getEventoporid()
        func()
      },[])

   const [eventoporid, setEventoPorId] = useState()
   const [isModalVisible, setisModalVisible] = useState(false);
   const [nomeEvento, setNomeEvento] = useState('')
   const [valor, setValor] = useState('')
   const [descricao, setDescricao] = useState('')
   const [data, setData] = useState(null)
   const [eventoEditar, setEventoEditar] = useState(null)
    const getEventoporid = async () => {
      try{
        const token = await AsyncStorage.getItem('token')
        const config = {
          headers:{
            'Authorization': `Bearer ${token}`
          }
        }
        const response = await api.get(`/eventoestabelecimento/${route.params?.userData.id_estabelecimento}`, config)
        const eventoporid = response.data
        setEventoPorId(eventoporid)
        //console.log('USER', userData)
      }catch(e){
        console.log('ERROR', e)
      }
      }
    
    const excluirEvento = async (evento) => {
        try{
          const token = await AsyncStorage.getItem('token')
          const config = {
            headers:{
              'Authorization': `Bearer ${token}`
            }
          }
          const response = await api.delete(`/eventos/${evento.id_evento}`, config)
          await getEventoporid()
          setisModalVisible(false)
        }catch(e){
          console.log(e)
        }
    } 



    const confirmarExcluir = (evento) => {
        Alert.alert('Alerta', `Apagar evento  ${evento.nome}?`,
          [
            {text: 'Cancelar', style: 'cancel'},
            {text: 'Confirmar', onPress: ()=> excluirEvento(evento)}
          ]
        
        )

    }


    const editarEvento = ({item})=>{
      setisModalVisible(true)
      setEventoEditar(item)
    }

    const TextEventosEstabelecimento = (eventoporid) => {
      return(
        <TouchableOpacity onPress={()=>editarEvento(eventoporid)}>
            <View style={styles.row}>
              <Text> {eventoporid.item.nome} </Text>
          </View>
          </TouchableOpacity>
        )
      }


    const criaEvento = async () =>{
        try {
          const token = await AsyncStorage.getItem('token')
          console.log(token)
          const config = {
            headers:{
              'Authorization': `Bearer ${token}`
            }
          }
          const newdate = data.split('/')
          console.log(newdate)
          const obj = {
            id_evento: '',
            id_estabelecimento: route.params?.userData.id_estabelecimento,
            id_artista: null,
            dt_evento: `${newdate[2]}-${newdate[1]}-${newdate[0]}`,
            nome: nomeEvento,
            valor,
            descricao,
            lat: route.params?.userData.lat,
            longi: route.params?.userData.longi
          }
          const response = await axios.post(`http://localhost:3334/eventos/criar`,obj,config)
          console.log('foi',response.data)
          await getEventoporid()
          setisModalVisible(false)
        }catch(e){
          console.log(e)
        }
    }
    return(
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>setisModalVisible(true)}>
          <Text>Criar Evento</Text>
        </TouchableOpacity>
        <Text style={styles.textArtista}> Meus Eventos </Text>
        <FlatList
        data={eventoporid}
        renderItem={TextEventosEstabelecimento}
        keyExtractor= {eventoporid => eventoporid.id_evento}>
        </FlatList>
        <Modal animationType='fade'
            visible={isModalVisible}
            onRequestClose={() => setisModalVisible(false)}
        >
          <View style={styles.modalView}>
            <Text>Crie um  Evento</Text>
            <TextInput 
                value={nomeEvento}
                onChangeText={item => {setNomeEvento(item)}}
                editable={true}
                multiline={false}
                maxLength={200}
                style={styles.input}
                placeholder="Nome" placeholderTextColor="#ccc"
                style={styles.input}
            >
            </TextInput>
            <TextInput 
                value={valor}
                onChangeText={item => {setValor(item)}}
                editable={true}
                multiline={false}
                maxLength={200}
                style={styles.input}
                placeholder="Valor" placeholderTextColor="#ccc"
                style={styles.input}
            >
            </TextInput>
            <TextInput 
                value={descricao}
                onChangeText={item => {setDescricao(item)}}
                editable={true}
                multiline={false}
                maxLength={200}
                style={styles.input}
                placeholder="Descrição" placeholderTextColor="#ccc"
                style={styles.input}
            >
            </TextInput>
            <TextInputMask mask={"[00]/[00]/[0000]"}
                             value={data}
                             onChangeText={item => {setData(item)}}
                             editable={true}
                             multiline={false}
                             maxLength={200}
                             style={styles.input}
                             placeholder="Data" placeholderTextColor="#ccc"
                             style={styles.input}
          
            >
            </TextInputMask>
            <TouchableOpacity onPress={criaEvento}>
              <Text>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal animationType='fade'
            visible={isModalVisible}
            onRequestClose={() => setisModalVisible(false)}
        >
          <View style={styles.modalView}>
            <Text>Editar Evento</Text>
            <TextInput 
                value={nomeEvento}
                onChangeText={item => {setNomeEvento(item)}}
                editable={true}
                multiline={false}
                maxLength={200}
                style={styles.input}
                placeholder="Nome" placeholderTextColor="#ccc"
                style={styles.input}
            >
            </TextInput>
            <TextInput 
                value={valor}
                onChangeText={item => {setValor(item)}}
                editable={true}
                multiline={false}
                maxLength={200}
                style={styles.input}
                placeholder="Valor" placeholderTextColor="#ccc"
                style={styles.input}
            >
            </TextInput>
            <TextInput 
                value={descricao}
                onChangeText={item => {setDescricao(item)}}
                editable={true}
                multiline={false}
                maxLength={200}
                style={styles.input}
                placeholder="Descrição" placeholderTextColor="#ccc"
                style={styles.input}
            >
            </TextInput>
            <TextInputMask mask={"[00]/[00]/[0000]"}
                             value={data}
                             onChangeText={item => {setData(item)}}
                             editable={true}
                             multiline={false}
                             maxLength={200}
                             style={styles.input}
                             placeholder="Data" placeholderTextColor="#ccc"
                             style={styles.input}
          
            >
            </TextInputMask>
            <TouchableOpacity onPress={criaEvento}>
              <Text>Confirmar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>confirmarExcluir(eventoEditar)}>
              <Text>Excluir Evento</Text>
            </TouchableOpacity>
          </View>
        </Modal>
    </View>
    )};

export default EventosEstabelecimento;

const styles = StyleSheet.create({
  dateComponente: {
    width: 190,
    backgroundColor: '#F8F8FF',
    borderRadius: 10,
    borderColor:"black",
    },
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
    modalView:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#87CEEB'
    },
    input:{
      width: 200,
      height: 40,
      marginVertical: 10,
      borderWidth: 1,
      paddingLeft: 20,
      fontWeight: 'bold',
      backgroundColor: '#F8F8FF',
      borderRadius: 10,
      borderColor:"black",
      color:"black",
    }
  
  })