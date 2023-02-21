import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView,Image, Linking } from 'react-native'
import React, {useEffect, useState} from 'react'
import {Button} from 'react-native';
import reco0 from '../img/HEALTH_Recovery0.png'
import reco1 from '../img/HEALTH_Recovery1.png'
import reco2 from '../img/HEALTH_Recovery2.png'
import reco3 from '../img/HEALTH_Recovery3.png'

import { Link, Navigate,useNavigate } from 'react-router-native';

import {useTranslation} from "react-i18next";
import { Col, Grid, Row } from 'react-native-easy-grid';
const Recuperacion = ({navigation}) => {
    const [textToRender, setTextToRender] = useState("")
    const llamar112 = async () => {
      await Linking.openURL("tel:+34112");
    }
    const {t, i18n} = useTranslation();
    
  return (
    <View style={styles.principal}>
      <ScrollView style={styles.central}>
      <Text style={styles.letras1}>
          {t("Recuperacion2")}
        </Text>
        <Text style={styles.letras1}>
          {t("Recuperacion3")}
        </Text>

        <Text style={styles.letras1}>
          {t("Recuperacion4")}
        </Text >
        <Image source={reco0} style={styles.imagen} /> 

        <Text style={styles.letras1}>
          {t("Recuperacion5")}
        </Text>

        <Image source={reco1} style={styles.imagen} /> 

        <Text style={styles.letras1}>
          {t("Recuperacion6")}
        </Text>
        <View>
        <Image source={reco2} style={styles.imagen} /> 

        </View>

        <Text style={styles.letras1}>
          {t("Recuperacion7")}
        </Text>
        <Image source={reco3} style={styles.imagen} /> 

        <Text style={styles.letras1}>
          {t("Recuperacion8")}
        </Text>
        <Text style={styles.letras1}>
          {t("Recuperacion9")}
        </Text>
        <Text style={styles.letras1}>
          {t("Recuperacion10")}
        </Text>
        <Text style={styles.letras1}>
        <TouchableOpacity onPress={llamar112} style={styles.botonEmer}><Text style={styles.letras0}>9. {t("Llamar")}</Text></TouchableOpacity>{t("Recuperacion11")}
        </Text>
        <Text style={styles.letras1}>
          {t("Recuperacion12")}
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
  imagen:{
    height:180,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    //resizeMode: 'contain'  
  },
  cajaTitulos:{
    width:'100%',
    height:40,
    alignItems: 'center',
    justifyContent: 'center',
    
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
  letras0:{
    color:'#1B2631' ,
    fontSize:20, 
    resizeMode: 'contain'  

  },
  letras1:{
    color:'#1B2631' ,
    fontSize:24, 
    marginBottom:7
  },
  botones:{

  }


})




export default Recuperacion