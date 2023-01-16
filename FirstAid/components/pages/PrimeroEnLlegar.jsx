import { View, Text, StyleSheet } from 'react-native'
import React, {useEffect, useState} from 'react'
import {Button} from 'react-native';

import { Link, Navigate,useNavigate } from 'react-router-native';

import {useTranslation} from "react-i18next";



const PrimeroEnLlegar = () => {
  

    //const navigate = useNavigate();
    const press = ()=>{
        navigate("/")
    }
    const {t, i18n} = useTranslation();
//#ffa103 color naranja
    
  return (
    <View style={styles.principal}>
      <View style={styles.central}>
        <Text style={styles.letras1}>
          {t("primeroenLlegar2")} 
        </Text>
        <Text style={styles.letras1}>
          {t("primeroenLlegar3")}
        </Text>
        <Text style={styles.letras1}>
          {t("primeroenLlegar4")}
        </Text >
        <Text style={styles.letras1}>
          {t("primeroenLlegar5")}
        </Text>
        <Text style={styles.letras1}>
          {t("primeroenLlegar6")}
        </Text>
        <Text style={styles.letras1}>
          {t("primeroenLlegar7")}
        </Text>
        <Text style={styles.letras1}>
          {t("primeroenLlegar8")}
        </Text>
        <Text style={styles.letras1}>
          {t("primeroenLlegar9")}
        </Text>
        <Text style={styles.letras1}>
          {t("primeroenLlegar10")}
        </Text>
      </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
  principal:{
    height: '100%',
    backgroundColor: "#bfbebf",
    alignItems: 'center',
    

  },
  central:{
    marginTop: 30,
    width:'80%',
    height: '40%',
    backgroundColor:'#ffa002',
    alignItems: 'center',
  },
  letras1:{
    color:'white' ,
    fontSize:20
  }


})


/*
<Link to="/"><Text> {t("goHome")}</Text></Link>
      <Button title="Go Home" onPress={press}/>



      <View style={{flexDirection:"row"}}>
      <Text>{t("testCadena")} 
      </Text>
      
      </View>
      
      <Button title="EN" onPress={()=>i18n.changeLanguage("en")}/>
      <Button title="ES" onPress={()=>i18n.changeLanguage("es")}/>
    
*/

export default PrimeroEnLlegar