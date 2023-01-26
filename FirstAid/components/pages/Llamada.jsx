import { View, Text, StyleSheet } from 'react-native'
import React, {useEffect, useState} from 'react'
import {Button} from 'react-native';

import { Link, Navigate,useNavigate } from 'react-router-native';

import {useTranslation} from "react-i18next";



const Llamada = ({navigation}) => {
  
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
        
        <Text style={styles.letras1}>
          {t("llamar")}
        </Text>
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