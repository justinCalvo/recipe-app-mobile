import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Sign Up Here!</Text>
        <TextInput
          style={styles.input}
          placeholder="Username..."
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password..."
          value={password}
          onChangeText={setPassword}
          returnKeyType="done"
          onSubmitEditing={() => navigation.navigate('Search')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    alignSelf: 'stretch',
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 50,
  },
});

export default SignUp;
