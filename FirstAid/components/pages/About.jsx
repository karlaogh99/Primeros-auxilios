import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import {Button} from 'react-native';

import { Link, Navigate,useNavigate } from 'react-router-native';

import {useTranslation} from "react-i18next";



const About = () => {
    const [textToRender, setTextToRender] = useState("")
    
    /*useEffect(() => {
        console.log("TEST")
    }, [])

    useEffect(() => {
        console.log("Text to render actualizado")
    }, [textToRender])
    */
  

    const navigate = useNavigate();
    const press = ()=>{
        navigate("/")
    }
    const {t, i18n} = useTranslation();

    const handlePressSynthoms = ()=>{
       setTextToRender("Los sintomas son a b y c");
    }
    const handlePressWhat = ()=>{
      setTextToRender("Esto es el what")
    }
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
      <Button title="Sintomas" onPress={handlePressSynthoms}/>
      <Button title="Que hacer" onPress={handlePressWhat}/>
      <Text>{textToRender}</Text>
    
    </View>
  )
}

export default About