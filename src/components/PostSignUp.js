import React, { useCallback } from 'react';
import { View, Button } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const PostSignUp = ({
  email,
  first_name,
  last_name,
  password,
  confirmPassword,
}) => {
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
      .catch(err => console.error(err));
  }, [email, first_name, last_name, password, navigation]);

  return (
    <View>
      <Button title="Sign Up!" onPress={handleSignUp} />
    </View>
  );
};

export default PostSignUp;
