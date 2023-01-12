import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import {Button} from 'react-native';

import { Link, Navigate,useNavigate } from 'react-router-native';

import {useTranslation} from "react-i18next";



const PrimeroEnLlegar = () => {
  

    const navigate = useNavigate();
    const press = ()=>{
        navigate("/")
    }
    const {t, i18n} = useTranslation();
//#ffa103 color naranja
    
  return (
    <View>
      <Text>{t("test")}</Text>
      <View style={{flexDirection:"row"}}>
      <Text>{t("testCadena")} 
      </Text>
      <Link to="/"><Text> {t("goHome")}</Text></Link>
      </View>
      
      <Button title="Go Home" onPress={press}/>
      <Button title="EN" onPress={()=>i18n.changeLanguage("en")}/>
      <Button title="ES" onPress={()=>i18n.changeLanguage("es")}/>
    
    </View>
  )
}

export default PrimeroEnLlegar