import { View, Text, StyleSheet, TouchableOpacity,Image, ScrollView, SafeAreaView } from 'react-native'
import React, {useEffect, useState} from 'react'
import {Button} from 'react-native';

import { Link, Navigate,useNavigate } from 'react-router-native';
import atragantamiento1 from '../img/HEALTH_Choking_1.png'
import atragantamiento2 from '../img/HEALTH_Choking_2.png'


import {useTranslation} from "react-i18next";
import { Col, Grid, Row } from 'react-native-easy-grid';
const llamar112 = async () => {
  await Linking.openURL("tel:+34112");
}
const Atragantamiento = ({navigation}) => {
    const [textToRender, setTextToRender] = useState("")

    const {t, i18n} = useTranslation();
    
  return (
    <View style={styles.principal}>
      <ScrollView style={styles.central}>
      <Text style={styles.letras1}>
          {t("Atragantamiento2")}
        </Text>
        <View style={styles.cajaTitulos}>
        <Text style={styles.letrasTitulos}>
          {t("sintomas")} 
        </Text>
        </View>
        <Text style={styles.letras1}>
          {t("Atragantamiento3")}
        </Text>
        <Text style={styles.letras1}>
          {t("Atragantamiento4")}
        </Text >
        <Text style={styles.letras1}>
          {t("Atragantamiento5")}
        </Text>
        <Text style={styles.letras1}>
          {t("Atragantamiento6")}
        </Text>
        <Text style={styles.letras1}>
          {t("Atragantamiento7")}
        </Text>
        <Text style={styles.letras1}>
          {t("Atragantamiento8")}
        </Text>
        <View style={styles.cajaTitulos}>
          <Text style={styles.letrasTitulos}>{t("quehacer")}</Text>
        </View>
        <Text style={styles.letras1}>
          {t("Atragantamiento9")}
        </Text>
        <Text style={styles.letras1}>
          {t("Atragantamiento10")}
        </Text>
        <Text style={styles.letras1}>
          {t("Atragantamiento11")}
        </Text>
        <Text style={styles.letras1}>
          {t("Atragantamiento12")}
        </Text>
        <Image source={atragantamiento1} style={styles.imagen} /> 
        <Text style={styles.letras1}>
          {t("Atragantamiento13")}
        </Text>
        <Image source={atragantamiento2} style={styles.imagen2} /> 

        <Text style={styles.letras1}>
          {t("Atragantamiento14")} 
        </Text>
        <Text style={styles.letras1}>
          {t("Atragantamiento15")}
        </Text>
        <Text style={styles.letras1}>
          {t("Atragantamiento16")}
        </Text> 
        <Text style={styles.letras1}>
          {t("Atragantamiento17")}
        </Text>
        <Text style={styles.letras1}>
          {t("Atragantamiento18")}
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Rcp')} style={styles.botones}><Text style={styles.letras0}>{t("Rcp1")} </Text></TouchableOpacity>
        <Text style={styles.letras1}>
        </Text>
        <Text style={styles.letras1}>
          {t("Atragantamiento20")} <TouchableOpacity onPress={()=>navigation.navigate('Reaccionalergica')} style={styles.botones}><Text style={styles.letras0}>{t("Atragantamiento201")} </Text></TouchableOpacity>
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
    height:250,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain'  
  },
  imagen2:{
    height:300,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain'  
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
  letrasTitulos2:{
    fontSize:30,
    color:'#1B2631' ,

  },
  central:{
    margin:15,
    marginBottom:20,
    width:'90%',
    backgroundColor:'#FEFDEA',
    borderRadius: 10,
    height:500
  },
  letras1:{
    color:'#1B2631' ,
    fontSize:24, 
    marginBottom:7
  },
    letras0:{
    color:'#1B2631' ,
    fontSize:20, 
    resizeMode: 'contain'  

  },
  botones:{
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
  botonEmer:{
    backgroundColor:'#F1948A' ,
     height:20, width:190,
     marginBottom:7, 
     alignItems:'center', 
     justifyContent:'center'
  }



})




export default Atragantamiento