import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import RecipeDetails from './screens/RecipeDetails';

const Stack = createStackNavigator();

export class Routes {
  static Home = 'Home';
  static RecipeDetails = 'RecipeDetails';
}

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.RecipeDetails} component={RecipeDetails} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
