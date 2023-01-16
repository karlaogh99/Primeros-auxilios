import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Inicio from '../pages/Inicio';
import PrimeroEnLlegar from '../pages/PrimeroEnLlegar';
import ReaccionAlergica from '../pages/ReaccionAlergica';
import {useTranslation} from "react-i18next";


const Stack = createStackNavigator();

export const StackNavigator = () => {
  const {t, i18n} = useTranslation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle:{
          backgroundColor: '#32659f',
          
        }
      }}
    >
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="PrimeroLlegar" options={{title:t("primeroenLlegar1")}} component={PrimeroEnLlegar} />
      <Stack.Screen name = "Reaccionalergica" options={{title:t("reaccionalergica1")}} component={ReaccionAlergica}/>
    </Stack.Navigator>
  );
}