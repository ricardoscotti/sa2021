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
  } from 'react-native';

  const Inicial = ({navigation}) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
        <Text style={styles.textEstabelecimento} onPress={()=> {navigation.navigate('login')}}>Sou Estabelecimento</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.textArtista}>Sou Artista</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  export default Inicial;
  
  const styles = StyleSheet.create({
    textEstabelecimento: {
      color: '#836FFF',
      marginTop: 200,
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 30
  },
    textArtista: {
      color: '#9ACD32',
      marginTop: 120,
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 30
  },
    container: {
        backgroundColor: "#1C1C1C",
        flex: 1
    }
  
  })