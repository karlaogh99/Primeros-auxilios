import { View, Text, StyleSheet, ScrollView , Image} from 'react-native'
import React, {useEffect, useState} from 'react'
import {Button} from 'react-native';
import RCP2 from '../img/HEALTH_CPR_2.png'
import RCP9 from '../img/HEALTH_CPR3.png'
import RCP4 from '../img/HEALTH_CPR_4.png'
import RCP5 from '../img/HEALTH_CPR_5.png'
import RCP6 from '../img/HEALTH_CPR_6.png'

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
        <Image source={RCP2} style={styles.imagen} /> 
        <Text style={styles.letras1}>
          {t("Rcp3")}
        </Text >
        <Text style={styles.letras1}>
          {t("Rcp4")}
        </Text>
        <Text style={styles.letras1}>
          {t("Rcp5")}
        </Text>
        <View>
          <Image source={RCP9} style={styles.imagen} /> 
        </View>
        
        <Text style={styles.letras1}>
          {t("Rcp6")}
        </Text>
        <Text style={styles.letras1}>
          {t("Rcp7")}
        </Text>
        <View>
          <Image source={RCP6} style={styles.imagen} /> 
        </View>
        <Text style={styles.letras1}>
          {t("Rcp8")}
        </Text>
        <Text style={styles.letras1}>
          {t("Rcp9")}
        </Text>  
        <View>
          <Image source={RCP5} style={styles.imagen} />
        </View>        
        <Text style={styles.letras1}>
          {t("Rcp91")}
        </Text>   
        <View>
          <Image source={RCP4} style={styles.imagen} /> 
        </View>   
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
  imagen:{
    height:200,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode:'cover',
  },
  imagen2:{
    height:140,
    width:'50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagenesParalelo:{
    display:'flex',
    flexDirection: 'row',
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

})



export default Rcp