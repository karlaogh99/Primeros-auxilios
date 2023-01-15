/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Inicio from './components/pages/Inicio';

import {NativeRouter, Route, Routes} from "react-router-native"
import About from './components/pages/About';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsEn from "./translations/en.json"
import translationsEs from "./translations/es.json"
import PrimeroEnLlegar from './components/pages/PrimeroEnLlegar';
import { Text } from 'react-native';
import { StackNavigator } from './components/navigator/StackNavigator';
const App = () => {
  

  i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    compatibilityJSON: 'v3', 
    resources: {
      en: {
        translation: translationsEn
      },
      es:{
        translation: translationsEs
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });
  return (

    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>

  
      
  );

}
export default App;


/*
CODIGO QUE YA NO USO
<NativeRouter>
<Routes>

    <Route path="/" element={<Inicio/>} />
    
  
    <Route  path="/about" element={<About/>} />
    <Route  path="/primeroenllegar" element={<PrimeroEnLlegar/>} />

</Routes>
 
</NativeRouter>
*/

