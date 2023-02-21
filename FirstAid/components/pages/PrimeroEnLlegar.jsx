import { View, Text, StyleSheet , Image, TouchableOpacity, ScrollView} from 'react-native'
import React, {useEffect, useState} from 'react'
import {Button} from 'react-native';
import F1 from '../img/HEALTH_First_on_scene1.png'
import F2 from '../img/HEALTH_First_on_scene2.png'
import F3 from '../img/HEALTH_First_on_scene3.png'
import { Link, Navigate,useNavigate } from 'react-router-native';
import {useTranslation} from "react-i18next";
const PrimeroEnLlegar = ({navigation}) => {

    const {t, i18n} = useTranslation();
//#ffa103 color naranja
    
  return (
    <View style={styles.principal}>
      <ScrollView>
      
      <View style={styles.central}>
        <Text style={styles.letras1}>
          {t("primeroenLlegar2")} 
        </Text>
        <View style={styles.cajaTitulos}>
          <Text style={styles.letras1}>
            {t("primeroenLlegar3")}
          </Text>
        </View>
        <Text style={styles.letras1}>
            {t("primeroenLlegar31")}
        </Text>
        <Text style={styles.letras1}>
            {t("primeroenLlegar32")}
        </Text>
        <Text style={styles.letras1}>
            {t("primeroenLlegar33")}
        </Text>
        <View style={styles.cajaTitulos}>
          <Text style={styles.letras1}>
            {t("primeroenLlegar4")}
          </Text>
        </View>
        <Text style={styles.letras1}>
            {t("primeroenLlegar41")}
        </Text>
        <Text style={styles.letras1}>
            {t("primeroenLlegar42")}
        </Text>
        <Text style={styles.letras1}>
            {t("primeroenLlegar43")}
        </Text>
        <View style={styles.cajaTitulos}>
          <Text style={styles.letras1}>
            {t("primeroenLlegar5")}
          </Text>
        </View>
        <View style={{height:10}}></View>
        <View style={styles.cajaTitulos}>
          <Text style={styles.letras1}>
            {t("primeroenLlegar6")}
          </Text>
        </View>
        <Text style={styles.letras1}>
            {t("primeroenLlegar61")}
        </Text >
        <Text style={styles.letras1}>
            {t("primeroenLlegar62")}
        </Text >
        <Text style={styles.letras1}>
            {t("primeroenLlegar63")}
        </Text >
          <Text style={styles.letras1}>
            {t("primeroenLlegar64")}
          </Text>
          <Text style={styles.letras1}>
            {t("primeroenLlegar65")}
          </Text>
          <Text style={styles.letras1}>
            {t("primeroenLlegar66")}
          </Text>
          <View style={styles.cajaTitulos}>
          <Text style={styles.letras1}>
            {t("primeroenLlegar7")}
          </Text>
        </View>
          <Text style={styles.letras1}>
            {t("primeroenLlegar71")}
          </Text>
          <Text style={styles.letras1}>
            {t("primeroenLlegar72")}
          </Text>
          <Text style={styles.letras1}>
            {t("primeroenLlegar73")} <TouchableOpacity onPress={()=>navigation.navigate('Rcp')} style={styles.botones}><Text style={styles.letras0}>{t("Rcp1")} </Text></TouchableOpacity>

          </Text>
          <Text style={styles.letras1}>
            {t("primeroenLlegar74")} <TouchableOpacity onPress={()=>navigation.navigate('Recuperacion')} style={styles.botones}><Text style={styles.letras0}>{t("Recuperacion1")} </Text></TouchableOpacity>
          </Text>
          <View style={styles.cajaTitulos}>
          <Text style={styles.letras1}>
            {t("primeroenLlegar8")}
          </Text>
        </View>
          <Text style={styles.letras1}>
            {t("primeroenLlegar81")}
         </Text>
        
        <View style={styles.imagenesParalelo}>
          <Image source={F1} style={styles.imagen2} /> 
          <Image source={F2} style={styles.imagen2} /> 
        
        </View>
       
      </View>
      </ScrollView>
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
    height:50,
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
  botonPeque:{
    backgroundColor:'#AED6F1' ,
    height:20, width:100,
    marginBottom:7, 
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
    fontSize:22, 
    resizeMode: 'contain'  

  },
  botones:{
    backgroundColor:'#ffa103' ,
     height:50, width:350,
     margin:7, 
     alignItems:'center', 
     justifyContent:'center',shadowOffset: {
      width: 0,
      height: 4,
      
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
 
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