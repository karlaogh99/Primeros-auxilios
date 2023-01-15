import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Inicio from '../pages/Inicio';
import PrimeroEnLlegar from '../pages/PrimeroEnLlegar';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="PrimeroLlegar" component={PrimeroEnLlegar} />
      
    </Stack.Navigator>
  );
}