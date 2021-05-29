import React, { useContext, useEffect, useState } from 'react';
import api from './services/axios'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'


const Login = ({navigation}) => {
  const [userInput, setUserInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [data, setData] = useState(null)
  

  
    const getUser = async (token, tipo, id) => {
          const config = {
              headers: {
                  'Authorization': `Bearer ${token}`
              }
          }
          const userResponse = await api.get(`/${tipo}/${id}`, config)
          const userData = userResponse.data
          console.log('USER', userData)
          if(tipo === 'artistas'){
            navigation.navigate('espacoArtista')
          }else{
            navigation.navigate('espacoEstabelecimento')
          }
      }
  

  const userLogin = async (login, senha) => {
      try {
          const response = await api.post('/auth/usuario', {login, senha})
          const {token, id_artista, id_estabelecimento} = response.data
          if(!token){
            alert(response.data.mensagem)
          }else {
            await AsyncStorage.setItem('token', token)
            let id
            let type
            if(id_artista){
                id = id_artista
                type = 'artistas'
            }else{
                id = id_estabelecimento
                type = 'estabelecimentos'
            }
            await getUser(token, type, id)
          }

      }catch(e){
          alert(e)
      }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textEstabelecimento}>Login</Text>
      <TextInput placeholder="User" style={styles.input} placeholderTextColor="#000" onChangeText={(text)=>setUserInput(text)}></TextInput>
      <TextInput placeholder="Passworld" style={styles.input} placeholderTextColor="#000" onChangeText={(text)=>setPasswordInput(text)}></TextInput>
      <TouchableOpacity>
        <Text style={styles.textEstabelecimento} onPress={()=>userLogin(userInput, passwordInput)}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
    textEstabelecimento: {
      color: '#836FFF',
      marginTop: 80,
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 30
  },
  container: {
    backgroundColor: "#1C1C1C",
    flex: 1
  },
  input:{
  width: 200,
  height: 40,
  marginVertical: 10,
  fontWeight: 'bold',
  borderColor:'black',
  borderWidth: 1,
  borderRadius: 10,
  paddingLeft: 20,
  color: 'black',
  backgroundColor: '#F8F8FF',
  marginLeft: 80
}
})