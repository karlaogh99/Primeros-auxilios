import { View, Text, StyleSheet , Image} from 'react-native'
import React, {useEffect, useState} from 'react'
import {Button} from 'react-native';
import F1 from '../img/HEALTH_First_on_scene1.png'
import F2 from '../img/HEALTH_First_on_scene2.png'
import F3 from '../img/HEALTH_First_on_scene3.png'

import { Link, Navigate,useNavigate } from 'react-router-native';

import {useTranslation} from "react-i18next";



const PrimeroEnLlegar = ({navigation}) => {
  

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
        <View style={styles.cajaTitulos}>
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
        </View>
        <View style={styles.imagenesParalelo}>
          <Image source={F1} style={styles.imagen2} /> 
          <Image source={F2} style={styles.imagen2} /> 
        
        </View>
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
    backgroundColor: "#FEFDEA",
    alignItems: 'center',


  },
  imagen2:{
    height:150,
    width:'50%',
  
  },
  imagenesParalelo:{
    display:'flex',
      flexDirection: 'row',
    },
  cajaTitulos:{
    width:'100%',
    height:250,
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