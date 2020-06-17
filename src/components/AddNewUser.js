import React, { useState, useCallback, useEffect } from 'react';
import { View, Button, Alert, Platform } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const NewUser = ({ email, first_name, last_name, password }) => {
  const [url, setUrl] = useState('');

  const navigation = useNavigation();

  const urlPath = useCallback(() => {
    Platform.OS === 'ios'
      ? setUrl('http://127.0.0.1:3003/users')
      : setUrl('http://10.0.2.2:3003/users');
  }, []);

  useEffect(() => {
    urlPath();
  }, [urlPath]);

  const handleSignUp = useCallback(() => {
    const data = {
      email,
      first_name,
      last_name,
      password,
    };

    axios
      .post(url, data)
      .then(res => {
        console.log('Posted successfully');
        navigation.navigate('Login');
      })
      .catch(err => {
        console.log(`${err.name} : ${err.message} - Duplicate emails found`);
        Alert.alert('Email has already been used');
      });
  }, [email, first_name, last_name, password, url, navigation]);

  return (
    <View>
      <Button title="Sign Up!" onPress={handleSignUp} />
    </View>
  );
};

export default NewUser;
