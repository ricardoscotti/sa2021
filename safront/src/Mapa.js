import React, { useState, useEffect } from 'react';
import {StyleSheet,View, Text} from 'react-native';
import MapView, {Marker,PROVIDER_GOOGLE} from 'react-native-maps';
import api from './services/axios';
import AsyncStorage from '@react-native-community/async-storage';



export default Mapa = ({ route }) => {

    useEffect(()=>{
       const funcao= async() => await getEventosPorId();
       funcao()
       console.log("mostrar"+eventoMap)
      },[])

    console.log(route.params.lat, route.params.long, route.params.id_evento)
    const objInitialRegion ={

      latitude: -27.60820,
      longitude: -48.45389,
      latitudeDelta: 0.09,
      longitudeDelta: 0.045,
}
    const [region, setRegion]= useState(objInitialRegion);

    const [eventoMap, setEventoMap] = useState(objInitialRegion)
      

    const getEventosPorId = async () => {
        console.log("AQUIIII")
        try{
          const token = await AsyncStorage.getItem('token')
          const config = {
            headers:{
              'Authorization': `Bearer ${token}`
            }
          }
          const response = await api.get(`/eventoporid/${route.params.id_evento}`, config)
          const evento = response.data
          console.log(evento)
          console.log(evento[0].Estabelecimento)
          const {lat:latitude,longi:longitude}=evento[0].Estabelecimento
          setEventoMap({latitude,longitude,latitudeDelta:0.09,longitudeDelta:0.045})
 
     
        }catch(e){
          console.log('ERROR', e)
        }
      }



return(    
    <View style={styles.conteiner}>
        <Text style={styles.textArtista}>Mapa</Text>
        <MapView 
        provider={PROVIDER_GOOGLE}
        region={eventoMap}
        style={styles.map}
        initialRegion={objInitialRegion}>

        <Marker coordinate={{latitude:Number(eventoMap.latitude), longitude:Number(eventoMap.longitude)}}title={route.params.nome} ></Marker>    
        </MapView>
    </View>
);
};
 const styles = StyleSheet.create({
     conteiner: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: "#1C1C1C",
     },
     map: {
        ...StyleSheet.absoluteFillObject,
        height: 600,
        width: 500,
        marginTop: 70,

        
     },
     textArtista: {
        ...StyleSheet.absoluteFillObject,
        color: '#8A2BE2',
        marginTop: 20,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30
    },
    });