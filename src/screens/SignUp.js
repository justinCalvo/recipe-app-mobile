import React from 'react';
import { View, StyleSheet } from 'react-native';
import NewUserForm from '../components/NewUserForm';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <NewUserForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default SignUp;
