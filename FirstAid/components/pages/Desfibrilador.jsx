import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import {Button} from 'react-native';
import desfibrilador from '../img/HEALTH_def.png'

import { Link, Navigate,useNavigate } from 'react-router-native';

import {useTranslation} from "react-i18next";
import { Col, Grid, Row } from 'react-native-easy-grid';
const Desfibrilador = ({navigation}) => {
    const [textToRender, setTextToRender] = useState("")

    const {t, i18n} = useTranslation();
    
  return (
    <View style={styles.principal}>
      <ScrollView style={styles.central}>
      <View style={styles.cajaTitulos}>
        <Text style={styles.letrasTitulos}>
          {t("Desfibrilador2")} 
        </Text>
      </View>    
      <Text style={styles.letras1}>
          {t("Desfibrilador3")}
        </Text>
        <Text style={styles.letras1}>
          {t("Desfibrilador4")}
        </Text>
        <Text style={styles.letras1}>
          {t("Desfibrilador5")}
        </Text >
        <Image source={desfibrilador} style={styles.imagen} /> 
        <Text style={styles.letras1}>
          {t("Desfibrilador6")}
        </Text>
        <Text style={styles.letras1}>
          {t("Desfibrilador7")}
        </Text>
        <Text style={styles.letras1}>
          {t("Desfibrilador8")}
        </Text>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  principal:{
    height: '100%',
    backgroundColor: "#FEFDEA",
    alignItems: 'center',
    justifyContent: 'center',


  },
  cajaTitulos:{
    width:'100%',
    height:80,
    alignItems: 'center',
    
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
    fontSize:30,
    color:'#1B2631' ,

  },
  letrasTitulos2:{
    fontSize:30,
    color:'#1B2631' ,

  },
  central:{
    margin:15,
    width:'90%',
    backgroundColor:'#FEFDEA',
    borderRadius: 10,

  },
  letras1:{
    color:'#1B2631' ,
    fontSize:24, 
    marginBottom:7
  },
  imagen:{
    height:180,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode:'cover',
  },
  botones:{

  }


})


export default Desfibrilador