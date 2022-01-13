import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Register from '../screens/Register';
import Dashboard from '../screens/Dashboard';
8;
import { NavigationContainer } from '@react-navigation/native';
import colors from '../global/colors';

import { Feather } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: colors.light.secondary,
          tabBarLabelPosition: 'beside-icon',
          tabBarIcon: ({ focused }) => {
            let iconName: 'list' | 'dollar-sign';
            if (route.name === 'Cadastrar') {
              iconName = 'dollar-sign';
            } else iconName = 'list';

            return (
              <Feather
                size={24}
                name={iconName}
                color={focused ? colors.light.secondary : colors.text}
              />
            );
          },
        })}>
        <BottomTab.Screen name="Listagem" component={Dashboard} />
        <BottomTab.Screen name="Cadastrar" component={Register} />
        {/* <BottomTab.Screen name="Resumo" component={Register} /> */}
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
