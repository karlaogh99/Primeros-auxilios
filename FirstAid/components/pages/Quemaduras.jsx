import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Linking } from 'react-native'
import React, {useEffect, useState} from 'react'
import {Button} from 'react-native';
import quemadura from '../img/HEALTH_burns.png'

import { Link, Navigate,useNavigate } from 'react-router-native';

import {useTranslation} from "react-i18next";
const llamar112 = async () => {
  await Linking.openURL("tel:+34112");
}
const Quemaduras = ({navigation}) => {
  
    const {t, i18n} = useTranslation();
//#ffa103 color naranja
    if(i18n.language== "en"){
            return (
                <View style={styles.principal}>
                  <ScrollView style={styles.central}>
                  <View style={styles.cajaSecundarios}>
                    <Text style={styles.letrasTitulos}>
                      {t("Quemaduras2")} 
                    </Text>
                    </View>
                    <Text style={styles.letras1}>
                      {t("Quemaduras3")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras4")}
                    </Text >
                    <Text style={styles.letras1}>
                      {t("Quemaduras5")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras6")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras7")}
                    </Text>
                    <View style={styles.cajaTitulos}>
                    <Text style={styles.letrasTitulos}>
                      {t("quehacer")} 
                    </Text>
                    </View>
                    <Text style={styles.letras1}>
                      {t("Quemaduras8")}
                    </Text>
                    <Image source={quemadura} style={styles.imagen} /> 
                    <Text style={styles.letras1}>
                      {t("Quemaduras9")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras10")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras11")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras12")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras13")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras14")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras141")}
                    </Text>
            
                    <Text style={styles.letras1}>
                      {t("Quemaduras15")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras16")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras17")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras17")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras18")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras19")}
                    </Text>
                    
                    <Text style={styles.letras1}>
                      {t("Quemaduras21")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras22")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras23")}
                    </Text>
                    <TouchableOpacity onPress={llamar112} style={styles.botonEmer}><Text style={styles.letras0}>6. {t("llamar")}</Text></TouchableOpacity>

                    <View style={styles.cajaSecundarios}>
                      <Text style={styles.letrasTitulos}>{t("Quemaduras25")}</Text>
                    </View>
                    <Text style={styles.letras1}>
                      {t("Quemaduras26")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras27")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras28")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras29")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras30")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras31")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras32")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras33")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras34")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras35")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras36")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras37")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras38")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras39")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras40")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras41")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras42")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras43")}
                    </Text>
                    
                    <TouchableOpacity onPress={llamar112} style={styles.botonEmer}><Text style={styles.letras0}>7. {t("llamar")}</Text></TouchableOpacity>
                    
                    
                  </ScrollView>
                </View>
              )
        }else{
            return (
                <View style={styles.principal}>
                  <ScrollView style={styles.central}>
                  <View style={styles.cajaSecundarios}>
                    <Text style={styles.letrasTitulos}>
                      {t("Quemaduras2")} 
                    </Text>
                    </View>
                    <Text style={styles.letras1}>
                      {t("Quemaduras3")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras4")}
                    </Text >
                    <Text style={styles.letras1}>
                      {t("Quemaduras5")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras6")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras7")}
                    </Text>
                    <View style={styles.cajaTitulos}>
                    <Text style={styles.letrasTitulos}>
                      {t("quehacer")} 
                    </Text>
                    </View>
                    <Text style={styles.letras1}>
                      {t("Quemaduras8")}
                    </Text>
                    <Image source={quemadura} style={styles.imagen} /> 
                    <Text style={styles.letras1}>
                      {t("Quemaduras9")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras10")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras11")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras12")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras13")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras14")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras141")}
                    </Text>
            
                    <Text style={styles.letras1}>
                    4. Cubre la quemadura.
                    </Text>
                    <Text style={styles.letras1}>
                       - Cubre la zona sin apretar con una gasa o un paño limpio.
                    </Text>
                    <Text style={styles.letras1}>
                    5. Eleva la zona quemada.
                    </Text>
                    <Text style={styles.letras1}>
                       - Levanta la herida por encima de la altura del corazón si es posible.
                    </Text>
                    <Text style={styles.letras1}>
                    6. Busca indicios de shock.
                    </Text>
                    <Text style={styles.letras1}>
                       - Los síntomas incluyen frío, piel húmeda y pegajosa, bajo pulso y respiración superficial.                    
                    </Text>
                    <TouchableOpacity onPress={llamar112} style={styles.botonEmer}><Text style={styles.letras0}>7. {t("llamar")}</Text></TouchableOpacity>
                    <View style={styles.cajaSecundarios}>
                      <Text style={styles.letrasTitulos}>{t("Quemaduras25")}</Text>
                    </View>
                    <Text style={styles.letras1}>
                      {t("Quemaduras26")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras27")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras28")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras29")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras30")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras31")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras32")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras33")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras34")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras35")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras36")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras37")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras38")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras39")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras40")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras41")}
                    </Text>
                    <Text style={styles.letras1}>
                      {t("Quemaduras42")}
                    </Text>
                    <TouchableOpacity onPress={llamar112} style={styles.botonEmer}><Text style={styles.letras0}>6. {t("llamar")}</Text></TouchableOpacity>
  
                    
                  </ScrollView>
                </View>
              )
        }
    

}
const styles = StyleSheet.create({
  principal:{
    height: '100%',
    backgroundColor: "#FEFDEA",
    alignItems: 'center',
    justifyContent: 'center',


  },
  letras0:{
    color:'#1B2631' ,
    fontSize:25, 
    resizeMode: 'contain'  

  },
  botonEmer:{
    backgroundColor:'#F1948A' ,
    height:50,
     width:350,
    margin:7, 
    alignItems:'center', 
    justifyContent:'center',
     shadowOffset: {
      width: 0,
      height: 4,
      
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  imagen:{
    height:300,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode:'cover'
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

  },
  
  botones:{
    backgroundColor:'#AED6F1' ,
     height:20, width:220,
     marginBottom:7, 
     alignItems:'center', 
     justifyContent:'center'
  },
 

})



export default Quemaduras