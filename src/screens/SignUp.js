import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import PostSignUp from '../components/PostSignUp';

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [first_name, setFirst_Name] = useState('');
  const [last_name, setLast_Name] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [toggleButton, setToggleButton] = useState(false);

  const comparePasswords = useCallback(() => {
    if (password === confirmPassword && password.length > 0) {
      setToggleButton(true);
    } else {
      setToggleButton(false);
    }
  }, [password, confirmPassword]);

  useEffect(() => {
    comparePasswords();
  }, [password, confirmPassword, comparePasswords]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Sign Up Here!</Text>
        <TextInput
          style={styles.input}
          placeholder="Email..."
          value={email}
          onChangeText={setEmail}
          returnKeyType="next"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="First Name..."
          value={first_name}
          onChangeText={setFirst_Name}
          returnKeyType="next"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name..."
          value={last_name}
          onChangeText={setLast_Name}
          returnKeyType="next"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Password..."
          value={password}
          onChangeText={setPassword}
          returnKeyType="next"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password..."
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          returnKeyType="done"
          autoCorrect={false}
        />
        {toggleButton ? (
          <PostSignUp
            email={email}
            first_name={first_name}
            last_name={last_name}
            password={password}
            confirmPassword={confirmPassword}
          />
        ) : (
          <Button
            title="Sign Up!"
            onPress={() => Alert.alert('Password must match')}
          />
        )}
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
    borderBottomWidth: 1,
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
