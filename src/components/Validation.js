import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  Keyboard,
} from 'react-native';
import NewUser from './NewUser';

const Validation = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  const [first_name, setFirst_Name] = useState('');
  const [first_NameError, setFirst_NameError] = useState('');
  const [isFirst_NameValid, setIsFirst_NameValid] = useState(false);

  const [last_name, setLast_Name] = useState('');
  const [last_NameError, setLast_NameError] = useState('');
  const [isLast_NameValid, setIsLast_NameValid] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const [allValid, setAllValid] = useState(false);

  const validateEmail = useCallback(() => {
    if (email.length > 0 && email.includes('@')) {
      setEmailError('');
      setIsEmailValid(true);
    } else {
      setEmailError('Please provide valid email');
    }
  }, [email]);

  const validateFirst_Name = useCallback(() => {
    if (first_name.length > 0) {
      setFirst_NameError('');
      setIsFirst_NameValid(true);
    } else {
      setFirst_NameError('First name is required');
    }
  }, [first_name]);

  const validateLast_Name = useCallback(() => {
    if (last_name.length > 0) {
      setLast_NameError('');
      setIsLast_NameValid(true);
    } else {
      setLast_NameError('Last name is required');
    }
  }, [last_name]);

  const validatePassword = useCallback(() => {
    if (password.length > 0) {
      setPasswordError('');
    } else {
      setPasswordError('Password is required');
    }
  }, [password]);

  const validatePasswordsMatch = useCallback(() => {
    if (password === confirmPassword) {
      setConfirmPasswordError('');
      setIsPasswordValid(true);
    } else {
      setConfirmPasswordError('Passwords must match');
    }
  }, [password, confirmPassword]);

  const validateForm = useCallback(() => {
    if (
      isEmailValid &&
      isFirst_NameValid &&
      isLast_NameValid &&
      isPasswordValid
    ) {
      setAllValid(true);
    }
  }, [isEmailValid, isFirst_NameValid, isLast_NameValid, isPasswordValid]);

  useEffect(() => {
    validateForm();
  }, [
    validateForm,
    isEmailValid,
    isFirst_NameValid,
    isLast_NameValid,
    isPasswordValid,
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up Here!</Text>
      <TextInput
        style={styles.input}
        placeholder="Email..."
        value={email}
        onChangeText={setEmail}
        returnKeyType="next"
        autoCorrect={false}
        onBlur={validateEmail}
      />
      {emailError.length ? <Text style={styles.text}>{emailError}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="First Name..."
        value={first_name}
        onChangeText={setFirst_Name}
        returnKeyType="next"
        autoCorrect={false}
        onBlur={validateFirst_Name}
      />
      {first_NameError.length ? (
        <Text style={styles.text}>{first_NameError}</Text>
      ) : null}
      <TextInput
        style={styles.input}
        placeholder="Last Name..."
        value={last_name}
        onChangeText={setLast_Name}
        returnKeyType="next"
        autoCorrect={false}
        onBlur={validateLast_Name}
      />
      {last_NameError.length ? (
        <Text style={styles.text}>{last_NameError}</Text>
      ) : null}
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Password..."
        value={password}
        onChangeText={setPassword}
        returnKeyType="next"
        autoCorrect={false}
        onBlur={validatePassword}
      />
      {passwordError.length ? (
        <Text style={styles.text}>{passwordError}</Text>
      ) : null}
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Confirm Password..."
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        returnKeyType="done"
        autoCorrect={false}
        onBlur={validatePasswordsMatch}
        blurOnSubmit={false}
        onSubmitEditing={() => Keyboard.dismiss()}
      />
      {confirmPasswordError.length ? (
        <Text style={styles.text}>{confirmPasswordError}</Text>
      ) : null}
      {allValid ? (
        <NewUser
          email={email}
          first_name={first_name}
          last_name={last_name}
          password={password}
        />
      ) : (
        <Button
          title="Sign Up!"
          onPress={() => Alert.alert('Please fill out form')}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 50,
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 50,
  },
  text: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default Validation;
