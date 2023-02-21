import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import React, {useEffect, useState} from 'react'
import {Button} from 'react-native';

import { Link, Navigate,useNavigate } from 'react-router-native';

import {useTranslation} from "react-i18next";



const Llamada = ({navigation}) => {
  const llamar112 = async () => {
    await Linking.openURL("tel:+34112");
  }
    const {t, i18n} = useTranslation();
//#ffa103 color naranja
    
  return (
    <View style={styles.principal}>
      <View style={styles.central}>
        <Text style={styles.letras1}>
          {t("Llamada2")} 
        </Text>
        <View style={styles.cajaTitulos}>
          <Text style={styles.letras1}>
            {t("Llamada3")}
          </Text>
          <Text style={styles.letras1}>
            {t("Llamada4")}
          </Text >
          <Text style={styles.letras1}>
            {t("Llamada5")}
          </Text>
          <Text style={styles.letras1}>
            {t("Llamada6")}
          </Text>
          <Text style={styles.letras1}>
            {t("Llamada7")}
          </Text>
          <Text style={styles.letras1}>
            {t("Llamada8")}
         </Text>
        </View>
        <TouchableOpacity onPress={llamar112} style={styles.botonEmer}><Text style={styles.letras0}>{t("llamar")}</Text></TouchableOpacity>
        
      </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
  principal:{
    height: '100%',
    backgroundColor: "#FEFDEA",
    alignItems: 'center',


  },
  letras0:{
    color:'#1B2631' ,
    fontSize:25, 
    resizeMode: 'contain'  

  },
  botonEmer:{
    backgroundColor:'#F1948A' ,
    height:50, width:350,
    margin:7, 
    alignItems:'center', 
    justifyContent:'center',
     shadowOffset: {
      width: 0,
      height: 4,
      
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  cajaTitulos:{
    width:'100%',
    height:420,    
    backgroundColor:'#AED6F1',
    borderRadius: 10,
  },
  cajaSecundarios:{
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    
    backgroundColor:'#F1948A',
    borderRadius: 10,
  },
  letrasTitulos:{
    fontSize:50,
    color:'#1B2631' ,

  },
  letrasTitulos2:{
    fontSize:50,
    color:'#1B2631' ,

  },
  central:{
    margin:15,
    width:'90%',
    height:200,
    backgroundColor:'#FEFDEA',
    borderRadius: 10,

  },
  letras1:{
    color:'#1B2631' ,
    fontSize:24, 
    margin:7
  },


})

export default Llamada