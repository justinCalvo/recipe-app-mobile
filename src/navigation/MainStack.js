import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from '../App.js';
import RecipeDetails from '../screens/RecipeDetails';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Welcome from '../screens/Welcome';
import Tab from './Tabs.js';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.Welcome}
        component={Welcome}
        options={{ title: null }}
      />
      <Stack.Screen
        name={Routes.Login}
        component={Login}
        option={{ title: null }}
      />
      <Stack.Screen
        name={Routes.Search}
        component={Tab}
        options={{ title: null }}
      />
      <Stack.Screen
        name={Routes.RecipeDetails}
        component={RecipeDetails}
        options={{ title: null }}
      />
      <Stack.Screen
        name={Routes.SignUp}
        component={SignUp}
        options={{ title: null }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
