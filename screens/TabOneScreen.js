
import React from "react";
import { Text, View, Image, Dimensions, ScrollView  } from "react-native";
import Boton from "../components/Boton";

export default function TabOneScreen({navigation}) {
  return (
    <View>
    <Image style={{
        height: 200,
        width: '100%',
        position: 'absolute'
      }} source={require('../assets/images/tope.png')}/>
      <Text style={{
        height: 200,
        width: '100%',
        textAlign: 'center',
        color: 'white',
        fontSize: 45,
        top: 50,
        textShadowColor:'black',
        textShadowOffset:{width: 0, height: 0},
        textShadowRadius:10,
        position: 'absolute'
      }}>Bienvenido</Text>
    <ScrollView style={{
      backgroundColor: 'transparent',
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
      alignContent: 'center',
    }}>
      
      <View style={{
        alignItems: 'center',
      }}>
        
        <View style={{
          height: 50,
          backgroundColor: 'transparent'
        }}>

        </View>

        <Image style={{
          height: 200,
          width: '100%',
        }} source={require('../assets/images/tope.png')}/>

        <View style={{
          backgroundColor: 'black',
          width: '100%',
          alignItems: 'center',
          gap: 100
        }}>

        <Image style={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: -50
        }} source={require('../assets/images/fondo-home.jpg')}/>

          <View style={{flexDirection: 'row'}}>
          <View style={{margin: 15,
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'center',}}>
            <Image style={{
              height: 50,
              width: 50,
              margin: 10
            }} source={require('../assets/images/favicon.png')}/>
            <Text style={{color:'white'}}>2</Text></View>
          </View>
          <View style={{
          height: '100%',
         backgroundColor: 'transparent'
        }}>
        <Boton text="LEER QR" onPress={() => {
          navigation.navigate("Camara")
          }}
          />
          <View style={{
          height: 600,
          backgroundColor: 'transparent'
        }}></View>
          
        </View>
          
        </View>
        
      </View>
    </ScrollView>
  </View>
    
  );
}

