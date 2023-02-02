import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import {Button} from 'react-native';
import desmayo from '../img/HEALTH_Fainting.png'

import { Link, Navigate,useNavigate } from 'react-router-native';

import {useTranslation} from "react-i18next";
import { Col, Grid, Row } from 'react-native-easy-grid';
const Desmayo = ({navigation}) => {
    const [textToRender, setTextToRender] = useState("")

    const {t, i18n} = useTranslation();
    
  return (
    <View style={styles.principal}>
      <ScrollView style={styles.central}>
      <Text style={styles.letras1}>
          {t("Desmayo2")}
        </Text>
        <View style={styles.cajaTitulos}>
        <Text style={styles.letrasTitulos}>
          {t("sintomas")} 
        </Text>
        </View>
        <Text style={styles.letras1}>
          {t("Desmayo3")}
        </Text>
        <Text style={styles.letras1}>
          {t("Desmayo4")}
        </Text >
        <Text style={styles.letras1}>
          {t("Desmayo5")}
        </Text>
        <Text style={styles.letras1}>
          {t("Desmayo6")}
        </Text>
        <Text style={styles.letras1}>
          {t("Desmayo7")}
        </Text>
        <Text style={styles.letras1}>
          {t("Desmayo8")}
        </Text>
        <View style={styles.cajaTitulos}>
          <Text style={styles.letrasTitulos}>{t("quehacer")}</Text>
        </View>
        
        <Text style={styles.letras1}>
          {t("Desmayo9")}
        </Text>
        <Text style={styles.letras1}>
          {t("Desmayo10")}
        </Text>
        <Image source={desmayo} style={styles.imagen} /> 

        <Text style={styles.letras1}>
          {t("Desmayo11")}
        </Text>
        <Text style={styles.letras1}>
          {t("Desmayo12")}
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
    resizeMode:'cover',
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




export default Desmayo