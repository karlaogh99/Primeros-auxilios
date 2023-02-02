import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Inicio from '../pages/Inicio';
import PrimeroEnLlegar from '../pages/PrimeroEnLlegar';
import ReaccionAlergica from '../pages/ReaccionAlergica';
import {useTranslation} from "react-i18next";
import Asma from '../pages/Asma';
import Hemorragia from '../pages/Hemorragia';
import Quemaduras from '../pages/Quemaduras';
import Atragantamiento from '../pages/Atragantamiento';
import Epilepsia from '../pages/Epilepsia';
import Desmayo from '../pages/Desmayo';
import AtaqueCorazon from '../pages/AtaqueCorazon';
import Shock from '../pages/Shock';
import Llamada from '../pages/Llamada';
import Recuperacion from '../pages/Recuperacion';
import Desfibrilador from '../pages/Desfibrilador';
import Rcp from '../pages/Rcp';
import Ictus from '../pages/Ictus';


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
      <Stack.Screen name="PrimeroLlegar" options={{title:t("primeroenLlegar1"), headerBackTitle:t("atras")}} component={PrimeroEnLlegar} />
      <Stack.Screen name = "Reaccionalergica" options={{title:t("reaccionalergica1"), headerBackTitle:t("atras")}} component={ReaccionAlergica}/>
      <Stack.Screen name = "Asma" options={{title:t("Asma1"), headerBackTitle:t("atras")}} component={Asma}/>
      <Stack.Screen name="Hemorragia" options={{title:t("Hemorragia1"), headerBackTitle:t("atras")}} component={Hemorragia} />
      <Stack.Screen name="Quemaduras" options={{title:t("Quemaduras1"), headerBackTitle:t("atras")}} component={Quemaduras} />
      <Stack.Screen name="Atragantamiento" options={{title:t("Atragantamiento1"), headerBackTitle:t("atras")}} component={Atragantamiento} />
      <Stack.Screen name="Epilepsia" options={{title:t("Epilepsia1"), headerBackTitle:t("atras")}} component={Epilepsia} />
      <Stack.Screen name="Desmayo" options={{title:t("Desmayo1"), headerBackTitle:t("atras")}} component={Desmayo} />
      <Stack.Screen name="AtaqueCorazon" options={{title:t("AtaqueCorazon1"), headerBackTitle:t("atras")}} component={AtaqueCorazon} />
      <Stack.Screen name="Shock" options={{title:t("Shock1"), headerBackTitle:t("atras")}} component={Shock} />
      <Stack.Screen name="Llamada" options={{title:t("Llamada1"), headerBackTitle:t("atras")}} component={Llamada} />
      <Stack.Screen name="Recuperacion" options={{title:t("Recuperacion1"), headerBackTitle:t("atras"), headerBackTitle:t("atras")}} component={Recuperacion} />
      <Stack.Screen name="Desfibrilador" options={{title:t("Desfibrilador1"), headerBackTitle:t("atras")}} component={Desfibrilador} />
      <Stack.Screen name="Rcp" options={{title:t("Rcp1"), headerBackTitle:t("atras")}} component={Rcp} />
      <Stack.Screen name="Ictus" options={{title:t("Ictus1"), headerBackTitle:t("atras")}} component={Ictus} />


    </Stack.Navigator>
  );
}