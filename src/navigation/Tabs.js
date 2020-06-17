import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Routes } from '../services/Routes';
import Search from '../screens/Search';
import Favorites from '../screens/Favorites';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={Routes.Search} component={Search} />
      <Tab.Screen name={Routes.Favorites} component={Favorites} />
    </Tab.Navigator>
  );
};

export default Tabs;
