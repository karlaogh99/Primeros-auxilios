import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, {useEffect, useState} from 'react'
import {Button} from 'react-native';

import { Link, Navigate,useNavigate } from 'react-router-native';

import {useTranslation} from "react-i18next";
import { Col, Grid, Row } from 'react-native-easy-grid';
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
        <Text style={styles.letras1}>
          {t("Atragantamiento13")}
        </Text>
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
        <Text style={styles.letras1}>
          {t("Atragantamiento19")}
        </Text>
        <Text style={styles.letras1}>
          {t("Atragantamiento20")}
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




export default Atragantamiento