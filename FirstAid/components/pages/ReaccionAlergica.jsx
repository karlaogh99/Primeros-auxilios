import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, {useEffect, useState} from 'react'
import {Button} from 'react-native';

import { Link, Navigate,useNavigate } from 'react-router-native';

import {useTranslation} from "react-i18next";
import { Col, Grid, Row } from 'react-native-easy-grid';
const ReaccionAlergica = () => {
    const [textToRender, setTextToRender] = useState("")

    const {t, i18n} = useTranslation();
    const handlePressWhat = ()=>{
        setTextToRender(<Text>

        </Text> )}
  return (
    <View style={styles.principal}>
      <ScrollView style={styles.central}>
        <Text style={styles.letras1}>
          {t("reaccionalergica2")} 
        </Text>
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
        <View>
        <Text>{t("quehacer")}</Text>
            <Text style={styles.letras1}>
          {t("reaccionalergica11")}
        </Text>
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
        
        </View>
        
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  principal:{
    height: '100%',
    backgroundColor: "#bfbebf",
    alignItems: 'center',
    justifyContent: 'center',


  },
  central:{
    
    width:'90%',
    backgroundColor:'#ffa002',
  },
  letras1:{
    color:'white' ,
    fontSize:20
  },
  botones:{

  }


})




export default ReaccionAlergica