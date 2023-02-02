import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView,Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import {Button} from 'react-native';

import { Link, Navigate,useNavigate } from 'react-router-native';
import shock0 from '../img/HEALTH_Shock0.png'
import shock1 from '../img/HEALTH_Shock1.png'
import {useTranslation} from "react-i18next";
import { Col, Grid, Row } from 'react-native-easy-grid';
const Shock = ({navigation}) => {
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
          {t("Shock2")}
        </Text>
        <Text style={styles.letras1}>
          {t("Shock3")}
        </Text >
        <Text style={styles.letras1}>
          {t("Shock4")}
        </Text>
        <Text style={styles.letras1}>
          {t("Shock5")}
        </Text>
        <Text style={styles.letras1}>
          {t("Shock6")}
        </Text>
        <Text style={styles.letras1}>
          {t("Shock7")}
        </Text>
        <Text style={styles.letras1}>
          {t("Shock8")}
        </Text>
        <Text style={styles.letras1}>
          {t("Shock9")}
        </Text>
        <Text style={styles.letras1}>
          {t("Shock10")}
        </Text>
        <Text style={styles.letras1}>
          {t("Shock11")}
        </Text>
        <Text style={styles.letras1}>
          {t("Shock12")}
        </Text>
        <Text style={styles.letras1}>
          {t("Shock13")}
        </Text>
        <View style={styles.cajaTitulos}>
          <Text style={styles.letrasTitulos}>{t("quehacer")}</Text>
        </View>
        
        <Text style={styles.letras1}>
          {t("Shock14")}
        </Text>
        <Image source={shock0} style={styles.imagen} /> 

        <Text style={styles.letras1}>
          {t("Shock15")}
        </Text>
        <Text style={styles.letras1}>
          {t("Shock16")}
        </Text>
        <Text style={styles.letras1}>
          {t("Shock17")}
        </Text>        
        <Image source={shock1} style={styles.imagen} /> 

        <Text style={styles.letras1}>
          {t("Shock18")}
        </Text> 
        <Text style={styles.letras1}>
          {t("Shock19")}
        </Text> 
        <Text style={styles.letras1}>
          {t("Shock20")}
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
  imagen:{
    height:250,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain'  
  },
  botones:{

  }


})


export default Shock