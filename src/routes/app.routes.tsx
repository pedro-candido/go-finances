import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Screen } from 'react-native-screens';
import Register from '../screens/Register';
import Dashboard from '../screens/Dashboard';

const BottomTab = createBottomTabNavigator();

const Routes = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Listagem" component={Dashboard} />
      <BottomTab.Screen name="Cadastrar" component={Register} />
      <BottomTab.Screen name="Resumo" component={Register} />
    </BottomTab.Navigator>
  );
};
