import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Keyboard } from 'react-native';
import ValidateUser from './ValidateUser';

const NewUserForm = () => {
  const [email, setEmail] = useState('');
  const [first_name, setFirst_Name] = useState('');
  const [last_name, setLast_Name] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [first_NameError, setFirst_NameError] = useState('');
  const [last_NameError, setLast_NameError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  let firstNameRef = React.createRef();
  let lastNameRef = React.createRef();
  let passwordRef = React.createRef();
  let confirmPasswordRef = React.createRef();

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
        onSubmitEditing={() => {
          firstNameRef.focus();
        }}
        blurOnSubmit={false}
      />
      {emailError.length ? <Text style={styles.text}>{emailError}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="First Name..."
        value={first_name}
        onChangeText={setFirst_Name}
        returnKeyType="next"
        autoCorrect={false}
        ref={ref => (firstNameRef = ref)}
        onSubmitEditing={() => {
          lastNameRef.focus();
        }}
        blurOnSubmit={false}
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
        ref={ref => (lastNameRef = ref)}
        onSubmitEditing={() => {
          passwordRef.focus();
        }}
        blurOnSubmit={false}
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
        ref={ref => (passwordRef = ref)}
        onSubmitEditing={() => {
          confirmPasswordRef.focus();
        }}
        blurOnSubmit={false}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Confirm Password..."
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        returnKeyType="done"
        autoCorrect={false}
        ref={ref => (confirmPasswordRef = ref)}
        onSubmitEditing={() => Keyboard.dismiss()}
        blurOnSubmit={false}
      />
      {confirmPasswordError.length ? (
        <Text style={styles.text}>{confirmPasswordError}</Text>
      ) : null}
      <ValidateUser
        email={email}
        first_name={first_name}
        last_name={last_name}
        password={password}
        confirmPassword={confirmPassword}
        setEmailError={setEmailError}
        setFirst_NameError={setFirst_NameError}
        setLast_NameError={setLast_NameError}
        setConfirmPasswordError={setConfirmPasswordError}
      />
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

export default NewUserForm;
