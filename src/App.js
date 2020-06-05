import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './navigation/MainStack';

export class Routes {
  static Home = 'Home';
  static Search = 'Search';
  static RecipeDetails = 'RecipeDetails';
  static Favorites = 'Favorites';
  static Login = 'Login';
  static SignUp = 'SignUp';
  static Welcome = 'Welcome';
}

const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
