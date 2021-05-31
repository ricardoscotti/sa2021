import React, { useState, useEffect } from 'react';
import {StyleSheet,View, Text} from 'react-native';
import MapView, {Marker,PROVIDER_GOOGLE} from 'react-native-maps';
import api from './services/axios';


export default Mapa = ({ route }) => {
    console.log(route.params.lat, route.params.long)
    const initialRegion = {
        latitude: route.params.lat,
        longitude: route.params.long,
        latitudeDelta: 0.09,
        longitudeDelta: 0.045,
    }; 
    const [region, setRegion]= useState(initialRegion);
return(
    <View style={styles.conteiner}>
        <Text style={styles.textArtista}>Mapa</Text>
        <MapView 
        provider={PROVIDER_GOOGLE}
        region={region}
        style={styles.map}
        initialRegion={initialRegion}>

        <Marker coordinate={{latitude:route.params.lat, longitude:route.params.long}}title={route.params.nome} ></Marker>    
        </MapView>
    </View>
);
};
 const styles = StyleSheet.create({
     conteiner: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: "#E6E6FA",
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