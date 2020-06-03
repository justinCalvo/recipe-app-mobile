import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from '../App.js';
import RecipeDetails from '../screens/RecipeDetails';
import Tab from './Tabs.js';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.Home}
        component={Tab}
        options={{ title: null }}
      />
      <Stack.Screen
        name={Routes.RecipeDetails}
        component={RecipeDetails}
        options={{ title: null }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
