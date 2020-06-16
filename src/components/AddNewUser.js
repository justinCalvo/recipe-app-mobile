import React, { useCallback } from 'react';
import { View, Button, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const NewUser = ({ email, first_name, last_name, password }) => {
  const navigation = useNavigation();

  const handleSignUp = useCallback(() => {
    const data = {
      email,
      first_name,
      last_name,
      password,
    };

    axios
      .post('http://127.0.0.1:3003/users', data)
      .then(res => {
        console.log('Posted successfully');
        navigation.navigate('Login');
      })
      .catch(err => {
        console.log(`${err.name} : ${err.message} - Duplicate emails found`);
        Alert.alert('Email has already been used');
      });
  }, [email, first_name, last_name, password, navigation]);

  return (
    <View>
      <Button title="Sign Up!" onPress={handleSignUp} />
    </View>
  );
};

export default NewUser;
