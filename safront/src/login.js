import React from 'react';

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

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textEstabelecimento}>Login</Text>
      <TextInput placeholder="Nome" style={styles.input} placeholderTextColor="#000"></TextInput>
      <TextInput placeholder="Telefone" style={styles.input} placeholderTextColor="#000"></TextInput>
      <TouchableOpacity>
        <Text style={styles.textEstabelecimento} onPress={()=> {navigation.navigate('espacoArtista')}}>Ir para espaço artista(teste)</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.textEstabelecimento}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
    textEstabelecimento: {
      color: '#836FFF',
      marginTop: 120,
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