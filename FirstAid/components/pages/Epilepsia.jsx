import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, {useEffect, useState} from 'react'
import {Button} from 'react-native';

import { Link, Navigate,useNavigate } from 'react-router-native';

import {useTranslation} from "react-i18next";
import { Col, Grid, Row } from 'react-native-easy-grid';
const Epilepsia = ({navigation}) => {
    const [textToRender, setTextToRender] = useState("")

    const {t, i18n} = useTranslation();
    
  return (
    <View style={styles.principal}>
      <ScrollView style={styles.central}>
      <Text style={styles.letras1}>
          {t("Epilepsia2")}
        </Text>
        <View style={styles.cajaTitulos}>
        <Text style={styles.letrasTitulos}>
          {t("Epilepsia3")} 
        </Text>
        </View>
        <Text style={styles.letras1}>
          {t("Epilepsia4")}
        </Text>
        <Text style={styles.letras1}>
          {t("Epilepsia5")}
        </Text >
        <Text style={styles.letras1}>
          {t("Epilepsia6")}
        </Text>
        <Text style={styles.letras1}>
          {t("Epilepsia7")}
        </Text>
        <Text style={styles.letras1}>
          {t("Epilepsia8")}
        </Text>
        <View style={styles.cajaTitulos}>
          <Text style={styles.letrasTitulos}>{t("Epilepsia9")}</Text>
        </View>
        <Text style={styles.letras1}>
          {t("Epilepsia4")}
        </Text>
        <Text style={styles.letras1}>
          {t("Epilepsia10")}
        </Text>
        <Text style={styles.letras1}>
          {t("Epilepsia11")}
        </Text>
        <Text style={styles.letras1}>
          {t("Epilepsia12")}
        </Text>
        <Text style={styles.letras1}>
          {t("Epilepsia13")}
        </Text>
        <Text style={styles.letras1}>
          {t("Epilepsia14")}
        </Text>
        <Text style={styles.letras1}>
          {t("Epilepsia15")}
        </Text>
        <View style={styles.cajaTitulos}>
          <Text style={styles.letrasTitulos}>{t("quehacer")}</Text>
        </View>
        <Text style={styles.letras1}>
          {t("Epilepsia16")} 
        </Text>
        <Text style={styles.letras1}>
          {t("Epilepsia17")}
        </Text>
        <Text style={styles.letras1}>
          {t("Epilepsia18")}
        </Text> 
        <Text style={styles.letras1}>
          {t("Epilepsia19")}
        </Text>
        <Text style={styles.letras1}>
          {t("Epilepsia20")}
        </Text>
        <Text style={styles.letras1}>
          {t("Epilepsia21")}
        </Text>
        <Text style={styles.letras1}>
          {t("Epilepsia22")}
        </Text>
        <Text style={styles.letras1}>
          {t("Epilepsia23")}
        </Text>
        <Text style={styles.letras1}>
          {t("Epilepsia24")}
        </Text>
        <Text style={styles.letras1}>
          {t("Epilepsia25")}
        </Text>
        <Text style={styles.letras1}>
          {t("Epilepsia26")}
        </Text>
        <Text style={styles.letras1}>
          {t("Epilepsia27")}
        </Text>
        <Text style={styles.letras1}>
          {t("Epilepsia28")}
        </Text>
        <Text style={styles.letras1}>
          {t("Epilepsia29")}
        </Text>
        <Text style={styles.letras1}>
          {t("Epilepsia30")}
        </Text>
        <Text style={styles.letras1}>
          {t("Epilepsia31")}
        </Text>
        <View style={styles.cajaTitulos}>
          <Text style={styles.letrasTitulos}>{t("Epilepsia32")}</Text>
        </View>
        <Text style={styles.letras1}>
          {t("Epilepsia33")}
        </Text>
        <Text style={styles.letras1}>
          {t("Epilepsia34")}
        </Text>
        <Text style={styles.letras1}>
          {t("Epilepsia35")}
        </Text>
        <Text style={styles.letras1}>
          {t("Epilepsia36")}
        </Text>
        <Text style={styles.letras1}>
          {t("Epilepsia37")}
        </Text>
        <View style={styles.cajaSecundarios}>
        <Text style={styles.letrasTitulos}>
          {t("Epilepsia38")} 
        </Text>
        </View>
        <Text style={styles.letras1}>
          {t("Epilepsia39")}
        </Text>
        <Text style={styles.letras1}>
          {t("Epilepsia40")}
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




export default Epilepsia