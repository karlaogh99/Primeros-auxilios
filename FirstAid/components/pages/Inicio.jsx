import { View, Text, Image, Pressable , StyleSheet, Button,Linking, TouchableOpacity}  from 'react-native';
import React from 'react'
import ulpgc from '../img/ulpgc3.png'
import espana from '../img/espana.png'
import ingles from '../img/ingles.png'

import {useTranslation} from "react-i18next";
import { Link, Navigate,useNavigate } from 'react-router-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
 const Inicio = () => {
  const mystyleIni = {
    width: '100%',
    height:130,
    backgroundColor: "#32659f",
    fontFamily: "Rubik",
    justifyContent: 'center',
    alignItems: 'center',
  } 
  
  const stylesInicio={
    alignItems: 'center',
    fontSize: 30,
    textAlign: 'center', 
    fontWeight: 'bold',
    justifyContent: 'center',
    color: 'white',
  }
  const espaciado={
    margin: 15
  }
  const {t, i18n} = useTranslation();

  const navigate = useNavigate();
  const llamar112 = async () => {
    await Linking.openURL("tel:+34112");
  }
  return (
    <View>
      <View style={styles.idiomas} >
        <View style={styles.cajabotones}>
          <TouchableOpacity onPress={()=>i18n.changeLanguage("es")}>
            <Image source={espana} style={styles.icono} />      
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>i18n.changeLanguage("en")}>
          <Image source={ingles} style={styles.icono} />      
          </TouchableOpacity>
        </View>
        
      </View>
      <View style={mystyleIni}>
        <Image source={ulpgc} alt=""/>
        <Text style={stylesInicio}>{t("Inicio")}
        </Text>
      </View>
      <View style={espaciado} >
          <Button title={t("Llamar")} color="red" onPress={llamar112}/>
      </View>

      <View style={styles.cajabotonesMenu}>
      <Grid>
          <Col style={styles.cajabotonesCol}>
            <Row>
              <TouchableOpacity style={styles.botton} onPress={()=>navigate("/primeroenllegar")}>
                <Text style={styles.letrasBoton}>{t("primeroenLlegar1")} </Text>
              </TouchableOpacity>
              
            </Row>
            <Row>
              <TouchableOpacity style={styles.botton} onPress={()=>navigate("/primeroenllegar")}>
                <Text style={styles.letrasBoton}>{t("primeroenLlegar1")} </Text>
              </TouchableOpacity>
            </Row>
          </Col>
          <Col style={styles.cajabotonesCol}>
            <Row>
              <TouchableOpacity style={styles.botton} onPress={()=>navigate("/primeroenllegar")}>
                <Text style={styles.letrasBoton}>{t("primeroenLlegar1")} </Text>
              </TouchableOpacity>
            </Row>
            <Row>
              <TouchableOpacity style={styles.botton} onPress={()=>navigate("/primeroenllegar")}>
                <Text style={styles.letrasBoton}>{t("primeroenLlegar1")} </Text>
              </TouchableOpacity>
            </Row>
          </Col>
          <Col style={styles.cajabotonesCol}>
            <Row>
              <TouchableOpacity style={styles.botton} onPress={()=>navigate("/primeroenllegar")}>
                <Text style={styles.letrasBoton}>{t("primeroenLlegar1")} </Text>
              </TouchableOpacity>
            </Row>
            <Row>
              <TouchableOpacity style={styles.botton} onPress={()=>navigate("/primeroenllegar")}>
                <Text style={styles.letrasBoton}>{t("primeroenLlegar1")} </Text>
              </TouchableOpacity>
            </Row>
          </Col>
          
        </Grid>
      </View>
        
      
        
      
    </View>
  )
}
const styles = StyleSheet.create({
    idiomas:{
      height:'10%',
      backgroundColor: "#32659f",
      display:'flex',
    },
    letrasBoton:{
      fontSize: 15,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },
    botton:{
      elevation: 8,
      backgroundColor: "#ffa002",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      marginBottom:5
    },
    cajabotonesMenu:{
      alignItems: 'center',
      height:150,
      justifyContent: 'center',
    },
    cajabotonesCol:{
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom:20
    },
    cajabotones:{
      width:60,
      height:60,
      display:'flex',
      flexDirection: 'row',
      marginBottom:20


    },
    icono:{
      height: 50,
      width: 50,
      marginLeft:5,
      resizeMode: 'stretch',
      display:'flex',
      right:0
    }
})


//<Button title="Go About" onPress={()=>navigate("/about")}/>
  //      <Link to ="/about">
    //      <Text>Test</Text>
      //  </Link>
export default Inicio
