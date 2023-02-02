import { View, Text, StyleSheet, ScrollView,Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import {Button} from 'react-native';
import ictus from '../img/HEALTH_Stroke.png'

import { Link, Navigate,useNavigate } from 'react-router-native';

import {useTranslation} from "react-i18next";

const Ictus = ({navigation}) => {
  
    const {t, i18n} = useTranslation();
//#ffa103 color naranja
    if(i18n.language == "es"){

    }
return (
    <View style={styles.principal}>
      <ScrollView style={styles.central}>

      <View style={styles.cajaTitulos}>
        <Text style={styles.letrasTitulos}>
        {t("Ictus1")} 
        </Text>
        <Text style={styles.letrasTitulos}>
          {t("Ictus2")} 
        </Text>
       </View>
       <Image source={ictus} style={styles.imagen} /> 

        <Text style={styles.letras1}>
          {t("Ictus3")}
        </Text>
        <Text style={styles.letras1}>
          {t("Ictus4")}
        </Text >
        <Text style={styles.letras1}>
          {t("Ictus5")}
        </Text>
        <Text style={styles.letras1}>
          {t("Ictus6")}
        </Text>
        <Text style={styles.letras1}>
          {t("Ictus7")}
        </Text>
        <Text style={styles.letras1}>
          {t("Ictus8")}
        </Text>
        <Text style={styles.letras1}>
          {t("Ictus9")}
        </Text>
        <View style={styles.cajaSecundarios}>
        <Text style={styles.letrasTitulos}>
          {t("Ictus10")} 
        </Text>
        </View>
        <Text style={styles.letras1}>
          {t("Ictus11")}
        </Text>
        <Text style={styles.letras1}>
          {t("Ictus12")}
        </Text>
        <Text style={styles.letras1}>
          {t("Ictus13")}
        </Text>
        <Text style={styles.letras1}>
          {t("Ictus14")}
        </Text>
        <Text style={styles.letras1}>
          {t("Ictus15")}
        </Text>
        <View style={styles.cajaTitulos}>
        <Text style={styles.letrasTitulos}>
          {t("quehacer")} 
        </Text>
       </View>
       <View style={styles.cajaSecundarios}>
        <Text style={styles.letrasTitulos}>
          {t("Ictus16")} 
        </Text>
        </View>
        <Text style={styles.letras1}>
          {t("Ictus17")}
        </Text>
        <Text style={styles.letras1}>
          {t("Ictus18")}
        </Text>
        <Text style={styles.letras1}>
          {t("Ictus19")}
        </Text>
        <Text style={styles.letras1}>
          {t("Ictus20")}
        </Text>
        <Text style={styles.letras1}>
          {t("Ictus21")}
        </Text>
        <Text style={styles.letras1}>
          {t("Ictus22")}
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
    height:200,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:5
  },
  cajaTitulos:{
    width:'100%',
    height:70,
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



export default Ictus