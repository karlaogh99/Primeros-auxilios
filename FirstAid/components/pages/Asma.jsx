import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Image, Linking } from 'react-native'
import React, {useEffect, useState} from 'react'
import {Button} from 'react-native';
import asma from '../img/HEALTH_Asthma.png'

import { Link, Navigate,useNavigate } from 'react-router-native';

import {useTranslation} from "react-i18next";
import { Col, Grid, Row } from 'react-native-easy-grid';
const Asma = ({navigation}) => {
    const llamar112 = async () => {
      await Linking.openURL("tel:+34112");
    }
    const {t, i18n} = useTranslation();
    
  return (
    <View style={styles.principal}>
      <ScrollView style={styles.central}>
      <Text style={styles.letras1}>
          {t("Asma2")}
        </Text>
        <View style={styles.cajaTitulos}>
        <Text style={styles.letrasTitulos}>
          {t("sintomas")} 
        </Text>
        </View>
        <Text style={styles.letras1}>
          {t("Asma3")}
        </Text>
        <Text style={styles.letras1}>
          {t("Asma4")}
        </Text >
        <Text style={styles.letras1}>
          {t("Asma5")}
        </Text>
        <Text style={styles.letras1}>
          {t("Asma6")}
        </Text>
        <Text style={styles.letras1}>
          {t("Asma7")}
        </Text>
        <Text style={styles.letras1}>
          {t("Asma8")}
        </Text>
        <Text style={styles.letras1}>
          {t("Asma9")}
        </Text>
        <View style={styles.cajaTitulos}>
          <Text style={styles.letrasTitulos}>{t("quehacer")}</Text>
        </View>
        <Image source={asma} style={styles.imagen} />    
        <Text style={styles.letras1}>
          {t("Asma10")}
        </Text>
        <Text style={styles.letras1}>
          {t("Asma11")}
        </Text>
        <Text style={styles.letras1}>
          {t("Asma12")}
        </Text>
        <Text style={styles.letras1}>
          {t("Asma13")}
        </Text>
        <Text style={styles.letras1}>
          {t("Asma14")}
        </Text>
        <Text style={styles.letras1}>
          {t("Asma15")} 
        </Text>
        <Text style={styles.letras1}>
          {t("Asma16")}
        </Text>
        <Text style={styles.letras1}>
          {t("Asma17")}
        </Text> 
        <Text style={styles.letras1}>
          {t("Asma18")}<TouchableOpacity onPress={llamar112} style={styles.botonEmer}><Text style={styles.letras0}>{t("Asma181")}</Text></TouchableOpacity>
        </Text>
        <Text style={styles.letras1}>
          {t("Asma19")}
        </Text>
        <Text style={styles.letras1}>
          {t("Asma20")} <TouchableOpacity onPress={()=>navigation.navigate('Rcp')} style={styles.botones}><Text style={styles.letras0}>{t("Rcp1")} </Text></TouchableOpacity>
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
    height:290,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
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
    width:'90%',
    backgroundColor:'#FEFDEA',
    borderRadius: 10,

  },
  letras1:{
    color:'#1B2631' ,
    fontSize:24, 
    marginBottom:7
  },
  botones:{

  },
  letras0:{
    color:'#1B2631' ,
    fontSize:20, 
    resizeMode: 'contain'  

  },
  /*botones:{
    backgroundColor:'#AED6F1' ,
     height:20, width:110,
     marginBottom:7, 
     alignItems:'center', 
     justifyContent:'center'
  },*/
  botones:{
    backgroundColor:'#AED6F1' ,
     height:50, width:350,
     margin:7, 
     alignItems:'center', 
     justifyContent:'center',shadowOffset: {
      width: 0,
      height: 4,
      
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
 
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
  }

})




export default Asma