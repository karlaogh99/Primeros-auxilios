import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import {Button} from 'react-native';
import hemo0 from '../img/HEALTH_Severe0.png'
import hemo1 from '../img/HEALTH_Severe1.png'
import hemo2 from '../img/HEALTH_Severe2.png'

import { Link, Navigate,useNavigate } from 'react-router-native';

import {useTranslation} from "react-i18next";

const Hemorragia = ({navigation}) => {
  
    const {t, i18n} = useTranslation();
//#ffa103 color naranja
    
return (
    <View style={styles.principal}>
      <ScrollView style={styles.central}>
      <View style={styles.cajaSecundarios}>
        <Text style={styles.letrasTitulos}>
          {t("Hemorragia2")} 
        </Text>
        </View>
        <View style={styles.cajaTitulos}>
        <Text style={styles.letrasTitulos}>
          {t("quehacer")} 
        </Text>
        </View>
        <Text style={styles.letras1}>
          {t("Hemorragia3")}
        </Text>
        <Text style={styles.letras1}>
          {t("Hemorragia4")}
        </Text >
        <Image source={hemo0} style={styles.imagen} /> 

        <Text style={styles.letras1}>
          {t("Hemorragia5")}
        </Text>
        <Text style={styles.letras1}>
          {t("Hemorragia6")}
        </Text>
        <Image source={hemo1} style={styles.imagen} /> 

        <Text style={styles.letras1}>
          {t("Hemorragia7")}
        </Text>
        <Text style={styles.letras1}>
          {t("Hemorragia8")}
        </Text>
        <Text style={styles.letras1}>
          {t("Hemorragia9")}
        </Text>
        <Text style={styles.letras1}>
          {t("Hemorragia10")}
        </Text>
        <Image source={hemo2} style={styles.imagen} /> 

        <Text style={styles.letras1}>
          {t("Hemorragia11")}
        </Text>
        <Text style={styles.letras1}>
          {t("Hemorragia12")}
        </Text>
        <Text style={styles.letras1}>
          {t("Hemorragia13")}
        </Text>
        <Text style={styles.letras1}>
          {t("Hemorragia14")}
        </Text>


        <View style={styles.cajaSecundarios}>
          <Text style={styles.letrasTitulos}>{t("Hemorragia15")}</Text>
        </View>
        <Text style={styles.letras1}>
          {t("Hemorragia16")}
        </Text>
        <Text style={styles.letras1}>
          {t("Hemorragia17")}
        </Text>
        <Text style={styles.letras1}>
          {t("Hemorragia18")}
        </Text>
        <Text style={styles.letras1}>
          {t("Hemorragia19")}
        </Text>
        <Text style={styles.letras1}>
          {t("Hemorragia20")}
        </Text>
        <Text style={styles.letras1}>
          {t("Hemorragia21")}
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



export default Hemorragia