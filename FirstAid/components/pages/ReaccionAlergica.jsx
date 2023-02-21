import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Linking } from 'react-native'
import React, {useEffect, useState} from 'react'
import {Button} from 'react-native';

import { Link, Navigate,useNavigate } from 'react-router-native';

import {useTranslation} from "react-i18next";
import { Col, Grid, Row } from 'react-native-easy-grid';
const ReaccionAlergica = ({navigation}) => {
    const [textToRender, setTextToRender] = useState("")
    const llamar112 = async () => {
      await Linking.openURL("tel:+34112");
    }
    const {t, i18n} = useTranslation();
    const handlePressWhat = ()=>{
        setTextToRender(<Text>

        </Text> )}
  return (
    <View style={styles.principal}>
      <ScrollView style={styles.central}>
        <View style={styles.cajaTitulos}>
        <Text style={styles.letrasTitulos}>
          {t("reaccionalergica2")} 
        </Text>
        </View>
        <Text style={styles.letras1}>
          {t("reaccionalergica3")}
        </Text>
        <Text style={styles.letras1}>
          {t("reaccionalergica4")}
        </Text >
        <Text style={styles.letras1}>
          {t("reaccionalergica5")}
        </Text>
        <Text style={styles.letras1}>
          {t("reaccionalergica6")}
        </Text>
        <Text style={styles.letras1}>
          {t("reaccionalergica7")}
        </Text>
        <Text style={styles.letras1}>
          {t("reaccionalergica8")}
        </Text>
        <Text style={styles.letras1}>
          {t("reaccionalergica9")}
        </Text>
        <Text style={styles.letras1}>
          {t("reaccionalergica10")}
        </Text>
        <View style={styles.cajaTitulos}>
          <Text style={styles.letrasTitulos}>{t("quehacer")}</Text>
        </View>
        <View style={styles.cajaSecundarios}>
        <Text style={styles.letrasTitulos2}>
          {t("reaccionalergica11")}
        </Text>
        </View>
        
        <Text style={styles.letras1}>
          {t("reaccionalergica12")}
        </Text>
        <Text style={styles.letras1}>
          {t("reaccionalergica13")}
        </Text>
        <Text style={styles.letras1}>
          {t("reaccionalergica14")}
        </Text>
        <Text style={styles.letras1}>
          {t("reaccionalergica15")}
        </Text>
        <Text style={styles.letras1}>
          {t("reaccionalergica16")}
        </Text>
        <View style={styles.cajaSecundarios}>
        <Text style={styles.letras1}>
          {t("reaccionalergica17")}
        </Text>
        </View>
        
        <Text style={styles.letras1}>
          
          {t("reaccionalergica18")}

        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('PrimeroLlegar')} style={styles.botones}><Text style={styles.letras0}>( {t("primeroenLlegar1")} )</Text></TouchableOpacity>
        <TouchableOpacity onPress={llamar112} style={styles.botonEmer}><Text style={styles.letras0}>{t("reaccionalergica19")} </Text></TouchableOpacity>  
        <Text style={styles.letras1}>
          {t("reaccionalergica20")}
        </Text> 
        <Text style={styles.letras1}>
          {t("reaccionalergica21")}
        </Text>
        <View style={styles.cajaSecundarios}>
        <Text style={styles.letras1}>
          {t("reaccionalergica22")}
        </Text>
        </View>
        
        <Text style={styles.letras1}>
          {t("reaccionalergica23")} 
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Shock')} style={styles.botones}><Text style={styles.letras0}>Shock</Text></TouchableOpacity>

        
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
    backgroundColor:'#AED6F1' ,
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


})



export default ReaccionAlergica