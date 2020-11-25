import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from "react-router-native";
import AuthStorageContext from '../contexts/AuthStorageContext';

import * as yup from 'yup';

 export const initialValues = {
  username: '',
  password: '',
};

export const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required.'),
  password: yup
    .string()
    .required('Password is required.')
});

export const SignInContainer = ({ onSubmit }) => {
  return (
    <View style={styles.flexContainer}>
      <FormikTextInput style={styles.inputButtons} name="username" placeholder="Username" testID="username" />
      <FormikTextInput style={styles.inputButtons} name="password" placeholder="Password" secureTextEntry testID="password"/>
      <TouchableOpacity onPress={onSubmit} testID="submit">
        <View style={styles.signButton}>
          <Text style={{ textAlign: 'center' }} color="appBar" fontWeight="appBar" fontSize="appBar">Sign in</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const SignIn = () => {
  const authStorage = useContext(AuthStorageContext);
  const [signIn] = useSignIn();
  let history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await signIn({ username, password });
    } catch (e) {
      console.log(e.message);
    }
  };
  const isValidLogin = async () => {
    const isLogged = await authStorage.getAccessToken();
    if (isLogged) history.push('/');
    return;
  };

  isValidLogin();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInContainer onSubmit={handleSubmit} />}
    </Formik>
  );
};

/*const InitialForm = ({initialValues, onSubmit, validationSchema}) => {
  return (
    <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    {({ handleSubmit }) => <SignInContainer onSubmit={handleSubmit} />}
  </Formik>
  );
};*/


const styles = StyleSheet.create({
  flexContainer: theme.flexContainer,
  inputButtons: {
    padding: 20,
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
    margin: 10,
    borderRadius: 4,
    fontSize: theme.fontSizes.inputPlaceholder
  },
  signButton: {
    padding: 20,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.primary,
    margin: 10,
    borderRadius: 4,
  }
});

export default SignIn;