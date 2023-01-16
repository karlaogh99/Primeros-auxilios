import { View, Text, Image, Pressable , StyleSheet,Platform ,Button,Linking, TouchableOpacity}  from 'react-native';
import React from 'react'
import ulpgc from '../img/ulpgc3.png'
import espana from '../img/espana.png'
import ingles from '../img/ingles.png'

import {useTranslation} from "react-i18next";
import { Link, Navigate,useNavigate } from 'react-router-native';
import { Col, Grid, Row } from 'react-native-easy-grid';

 const Inicio = ({navigation}) => {
  
  const {t, i18n} = useTranslation();

  //const navigate = useNavigate();
  const llamar112 = async () => {
    await Linking.openURL("tel:+34112");
  }
  if(i18n.language == "en"){
    return (
      <View>
        <View>
        <View style={styles.idiomas} >
          <View style={styles.cajabotonesIdioma}>
            <TouchableOpacity onPress={()=>i18n.changeLanguage("es")}>
              <Image source={espana} style={styles.icono} />      
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>i18n.changeLanguage("en")}>
              <Image source={ingles} style={styles.icono} />      
            </TouchableOpacity>
          </View>
          
        </View>
        <View style={styles.mystyleIni}>
          <Image style={{width:150, height:150}} source={ulpgc} alt=""/>
          <Text style={styles.stylesInicio}>{t("Inicio")}
          </Text>
        </View>
        </View>
        
        <View style={styles.cuerpoColor}>
          <View style={styles.espaciado} >
              <TouchableOpacity style={styles.botonLlamada} onPress={llamar112}>
                  <Text style={styles.letrasLlamada}>{t("Llamar")}</Text>     
                </TouchableOpacity>
  
          </View>
  
        <View style={styles.cajabotonesMenu}>
        <Grid>
            <Col style={styles.cajabotonesCol}>
              <Row>
                <TouchableOpacity style={styles.botton} onPress={()=>navigation.navigate('PrimeroLlegar')}>
                  <Text style={styles.letrasBoton}>{t("primeroenLlegar1")} </Text>
                </TouchableOpacity>
                
              </Row>
              <Row>
                <TouchableOpacity style={styles.botton} onPress={()=>navigation.navigate('Reaccionalergica')}>
                  <Text style={styles.letrasBoton}>{t("reaccionalergica1")} </Text>
                </TouchableOpacity>
              </Row>
            </Col>
            <Col style={styles.cajabotonesCol}>
              <Row>
                <TouchableOpacity style={styles.botton} onPress={()=>navigation.navigate('PrimeroLlegar')}>
                  <Text style={styles.letrasBoton}>{t("primeroenLlegar1")} </Text>
                </TouchableOpacity>
              </Row>
              <Row>
                <TouchableOpacity style={styles.botton} onPress={()=>navigation.navigate('PrimeroLlegar')}>
                  <Text style={styles.letrasBoton}>{t("primeroenLlegar1")} </Text>
                </TouchableOpacity>
              </Row>
            </Col>
            <Col style={styles.cajabotonesCol}>
              <Row>
                <TouchableOpacity style={styles.botton} onPress={()=>navigation.navigate('PrimeroLlegar')}>
                  <Text style={styles.letrasBoton}>{t("primeroenLlegar1")} </Text>
                </TouchableOpacity>
              </Row>
              <Row>
                <TouchableOpacity style={styles.botton} onPress={()=>navigation.navigate('PrimeroLlegar')}>
                  <Text style={styles.letrasBoton}>{t("primeroenLlegar1")} </Text>
                </TouchableOpacity>
              </Row>
            </Col>
            
          </Grid>
        </View>
        </View>
        
          
        
          
        
      </View>
    )
  }else{
    return (
      <View>
        <View>
        <View style={styles.idiomas} >
          <View style={styles.cajabotonesIdioma}>
            <TouchableOpacity onPress={()=>i18n.changeLanguage("es")}>
              <Image source={espana} style={styles.icono} />      
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>i18n.changeLanguage("en")}>
              <Image source={ingles} style={styles.icono} />      
            </TouchableOpacity>
          </View>
          
        </View>
        <View style={styles.mystyleIni}>
          <Image style={{width:150, height:150}} source={ulpgc} alt=""/>
          <Text style={styles.stylesInicio}>{t("Inicio")}
          </Text>
        </View>
        </View>
        
        <View style={styles.cuerpoColor}>
          <View style={styles.espaciado} >
              <TouchableOpacity style={styles.botonLlamada} onPress={llamar112}>
                  <Text style={styles.letrasLlamada}>{t("Llamar")}</Text>     
                </TouchableOpacity>
  
          </View>
  
        <View style={styles.cajabotonesMenu}>
        <Grid>
            <Col style={styles.cajabotonesCol}>
              <Row>
                <TouchableOpacity style={styles.botton} onPress={()=>navigation.navigate('PrimeroLlegar')}>
                  <Text style={styles.letrasBoton}>{t("primeroenLlegar1")} </Text>
                </TouchableOpacity>
                
              </Row>
              <Row>
                <TouchableOpacity style={styles.botton} onPress={()=>navigation.navigate('Reaccionalergica')}>
                  <Text style={styles.letrasBoton}>{t("reaccionalergica1")} </Text>
                </TouchableOpacity>
              </Row>
            </Col>
            <Col style={styles.cajabotonesCol}>
              <Row>
                <TouchableOpacity style={styles.botton} onPress={()=>navigation.navigate('PrimeroLlegar')}>
                  <Text style={styles.letrasBoton}>{t("primeroenLlegar1")} </Text>
                </TouchableOpacity>
              </Row>
              <Row>
                <TouchableOpacity style={styles.botton} onPress={()=>navigation.navigate('PrimeroLlegar')}>
                  <Text style={styles.letrasBoton}>{t("primeroenLlegar1")} </Text>
                </TouchableOpacity>
              </Row>
            </Col>
            <Col style={styles.cajabotonesCol}>
              <Row>
                <TouchableOpacity style={styles.botton} onPress={()=>navigation.navigate('PrimeroLlegar')}>
                  <Text style={styles.letrasBoton}>{t("primeroenLlegar1")} </Text>
                </TouchableOpacity>
              </Row>
              <Row>
                <TouchableOpacity style={styles.botton} onPress={()=>navigation.navigate('PrimeroLlegar')}>
                  <Text style={styles.letrasBoton}>{t("primeroenLlegar1")} </Text>
                </TouchableOpacity>
              </Row>
            </Col>
            
          </Grid>
        </View>
        </View>
        
          
        
          
        
      </View>
    )
  }
  
}
const styles = StyleSheet.create({
   mystyleIni: {
    width: '100%',
    height: Platform.OS==='ios' ? 175 : 175,
    backgroundColor: "#32659f",
    fontFamily: "Rubik",
    justifyContent: 'center',
    alignItems: 'center',
  } ,
  
   stylesInicio:{
    alignItems: 'center',
    fontSize: 30,
    marginBottom:10,
    textAlign: 'center', 
    fontWeight: 'bold',
    justifyContent: 'center',
    color: 'white',
  },
   espaciado:{
    margin: 15,
    alignItems: 'center',

    justifyContent: 'center',

  },
  botonLlamada:{
    elevation: 8,
      backgroundColor: "red",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 120,
      marginBottom:5
  },
  letrasLlamada:{
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
   
    idiomas:{
      backgroundColor: "#32659f",
      display:'flex',
    },
    cuerpoColor:{
      backgroundColor: "#bfbebf",
      height:600
    },
    letrasBoton:{
      fontSize: 15,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },
    botton:{
      height: 70,
      width: 110,
      backgroundColor: "#ffa002",
      borderRadius: 10,
      paddingVertical: 5,
      paddingHorizontal: 12,
      shadowColor: "#000",
      shadowOffset: {
	      width: 0,
	      height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 9,
    },
    cajabotonesMenu:{
      alignItems: 'center',
      height:150,
      justifyContent: 'center',
    },
    cajabotonesCol:{
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom:1
    },
    cajabotonesIdioma:{
      width:60,
      height: Platform.OS==='ios' ? 40 : 40,
      display:'flex',
      flexDirection: 'row',


    },
    icono:{
      height: 40,
      width: 40,
      marginLeft:5,
      resizeMode: 'stretch',
      display:'flex',
      right:0,
      marginTop:Platform.OS==='ios' ? 1 : 1 ,

    }
})


//<Button title="Go About" onPress={()=>navigate("/about")}/>
  //      <Link to ="/about">
    //      <Text>Test</Text>
      //  </Link>
export default Inicio
