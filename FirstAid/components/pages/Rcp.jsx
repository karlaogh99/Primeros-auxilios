import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import {Button} from 'react-native';

import { Link, Navigate,useNavigate } from 'react-router-native';

import {useTranslation} from "react-i18next";

const Rcp = ({navigation}) => {
  
    const {t, i18n} = useTranslation();
//#ffa103 color naranja
    
return (
    <View style={styles.principal}>
      <ScrollView style={styles.central}>
        <Text style={styles.letras1}>
          {t("Rcp2")}
        </Text>
        <Text style={styles.letras1}>
          {t("Rcp3")}
        </Text >
        <Text style={styles.letras1}>
          {t("Rcp4")}
        </Text>
        <Text style={styles.letras1}>
          {t("Rcp5")}
        </Text>
        <Text style={styles.letras1}>
          {t("Rcp6")}
        </Text>
        <Text style={styles.letras1}>
          {t("Rcp7")}
        </Text>
        <Text style={styles.letras1}>
          {t("Rcp8")}
        </Text>
        <Text style={styles.letras1}>
          {t("Rcp9")}
        </Text>
        <Text style={styles.letras1}>
          {t("Rcp10")}
        </Text>
        <Text style={styles.letras1}>
          {t("Rcp11")}
        </Text>
        <Text style={styles.letras1}>
          {t("Rcp12")}
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



export default Rcp