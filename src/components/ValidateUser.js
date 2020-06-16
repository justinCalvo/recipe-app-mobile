import React, { useState, useEffect, useCallback } from 'react';
import { View, Button, Alert } from 'react-native';
import AddNewUser from './AddNewUser';
import validator from 'validator';

const ValidateUser = ({
  email,
  setEmailError,
  first_name,
  last_name,
  password,
  confirmPassword,
  setConfirmPasswordError,
}) => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isFirst_NameValid, setIsFirst_NameValid] = useState(false);
  const [isLast_NameValid, setIsLast_NameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [allValid, setAllValid] = useState(false);

  const validateEmail = useCallback(() => {
    if (validator.isEmail(email)) {
      setEmailError('');
      setIsEmailValid(true);
    } else {
      setEmailError('Please provide valid email');
      setIsEmailValid(false);
    }
  }, [email, setEmailError]);

  const validateFirst_Name = useCallback(() => {
    if (!validator.isEmpty(first_name) && validator.isAlpha(first_name)) {
      setIsFirst_NameValid(true);
    } else {
      setIsFirst_NameValid(false);
    }
  }, [first_name]);

  const validateLast_Name = useCallback(() => {
    if (!validator.isEmpty(last_name) && validator.isAlpha(last_name)) {
      setIsLast_NameValid(true);
    } else {
      setIsLast_NameValid(false);
    }
  }, [last_name]);

  const validatePasswordsMatch = useCallback(() => {
    if (
      !validator.isEmpty(password) &&
      !validator.isEmpty(confirmPassword) &&
      password === confirmPassword
    ) {
      setConfirmPasswordError('');
      setIsPasswordValid(true);
    } else {
      setConfirmPasswordError('Passwords must match');
      setIsPasswordValid(false);
    }
  }, [password, confirmPassword, setConfirmPasswordError]);

  const validateForm = useCallback(() => {
    validateFirst_Name();
    validateLast_Name();
    if (email) {
      validateEmail();
    }
    if (confirmPassword.length) {
      validatePasswordsMatch();
    }
    if (
      isEmailValid &&
      isFirst_NameValid &&
      isLast_NameValid &&
      isPasswordValid
    ) {
      setAllValid(true);
    } else {
      setAllValid(false);
    }
  }, [
    validateEmail,
    validateFirst_Name,
    validateLast_Name,
    validatePasswordsMatch,
    email,
    confirmPassword,
    isEmailValid,
    isFirst_NameValid,
    isLast_NameValid,
    isPasswordValid,
  ]);

  useEffect(() => {
    validateForm();
  }, [validateForm, email, first_name, last_name, password, confirmPassword]);

  return (
    <View>
      {allValid ? (
        <AddNewUser
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

export default ValidateUser;
