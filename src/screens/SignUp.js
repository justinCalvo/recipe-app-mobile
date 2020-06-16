import React from 'react';
import { View, StyleSheet } from 'react-native';
import Validation from '../components/Validation';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Validation />
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
