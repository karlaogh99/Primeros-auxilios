import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import {Button} from 'react-native';

import { Link, Navigate,useNavigate } from 'react-router-native';

import {useTranslation} from "react-i18next";

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
                      {t("Quemaduras20")}
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
                    <Text style={styles.letras1}>
                      {t("Quemaduras24")}
                    </Text>
            
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
                    <Text style={styles.letras1}>
                      {t("Quemaduras44")}
                    </Text>
                    
                    
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
                       - Los síntomas incluyen frío, piel húmeda y pegajosa, bajo pulso y respiración superficial.                    </Text>
                    <Text style={styles.letras1}>
                    7. Llama al 112
                    </Text>
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



export default Quemaduras