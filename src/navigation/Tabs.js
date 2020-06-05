import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Routes } from '../App.js';
// import Home from '../screens/Home';
import Welcome from '../screens/Welcome';
import Search from '../screens/Search';
import Favorites from '../screens/Favorites';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name={Routes.Home} component={Home} /> */}
      {/* <Tab.Screen name={Routes.Welcome} component={Welcome} /> */}
      <Tab.Screen name={Routes.Search} component={Search} />
      <Tab.Screen name={Routes.Favorites} component={Favorites} />
    </Tab.Navigator>
  );
};

export default Tabs;
