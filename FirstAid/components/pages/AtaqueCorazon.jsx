import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import {Button} from 'react-native';
import ataque from '../img/HEALTH_Heart_attack.png'

import { Link, Navigate,useNavigate } from 'react-router-native';

import {useTranslation} from "react-i18next";
import { Col, Grid, Row } from 'react-native-easy-grid';
const AtaqueCorazon = ({navigation}) => {
    const [textToRender, setTextToRender] = useState("")

    const {t, i18n} = useTranslation();
    
  return (
    <View style={styles.principal}>
      <ScrollView style={styles.central}>
        <View style={styles.cajaTitulos}>
        <Text style={styles.letrasTitulos}>
          {t("sintamosyseñales")} 
        </Text>
        </View>
        <Text style={styles.letras1}>
          {t("AtaqueCorazon2")}
        </Text>
        <Text style={styles.letras1}>
          {t("AtaqueCorazon3")}
        </Text >
        <Text style={styles.letras1}>
          {t("AtaqueCorazon4")}
        </Text>
        <Text style={styles.letras1}>
          {t("AtaqueCorazon5")}
        </Text>
        <Text style={styles.letras1}>
          {t("AtaqueCorazon6")}
        </Text>
        <Text style={styles.letras1}>
          {t("AtaqueCorazon7")}
        </Text>
        <View style={styles.cajaTitulos}>
          <Text style={styles.letrasTitulos}>{t("quehacer")}</Text>
        </View>
        
        <Text style={styles.letras1}>
          {t("AtaqueCorazon8")}
        </Text>
        <Text style={styles.letras1}>
          {t("AtaqueCorazon9")}
        </Text>
        <Text style={styles.letras1}>
          {t("AtaqueCorazon10")}
        </Text>
        <Text style={styles.letras1}>
          {t("AtaqueCorazon11")}
        </Text>        
        <Image source={ataque} style={styles.imagen} /> 

        <Text style={styles.letras1}>
          {t("AtaqueCorazon12")}
        </Text> 
        <Text style={styles.letras1}>
          {t("AtaqueCorazon13")}
        </Text> 
        <Text style={styles.letras1}>
          {t("AtaqueCorazon15")}
        </Text> 
        <Text style={styles.letras1}>
          {t("AtaqueCorazon16")}
        </Text> 
        <Text style={styles.letras1}>
          {t("AtaqueCorazon17")}
        </Text> 
        <Text style={styles.letras1}>
          {t("AtaqueCorazon18")}
        </Text> 
        <Text style={styles.letras1}>
          {t("AtaqueCorazon19")}
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

  }


})


export default AtaqueCorazon