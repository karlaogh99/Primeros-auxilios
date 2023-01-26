import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, {useEffect, useState} from 'react'
import {Button} from 'react-native';

import { Link, Navigate,useNavigate } from 'react-router-native';

import {useTranslation} from "react-i18next";
import { Col, Grid, Row } from 'react-native-easy-grid';
const Recuperacion = ({navigation}) => {
    const [textToRender, setTextToRender] = useState("")

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
        <Text style={styles.letras1}>
          {t("Recuperacion5")}
        </Text>
        <Text style={styles.letras1}>
          {t("Recuperacion6")}
        </Text>
        <Text style={styles.letras1}>
          {t("Recuperacion7")}
        </Text>
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
          {t("Recuperacion11")}
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




export default Recuperacion