import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';

import * as yup from 'yup';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required.'),
  password: yup
    .string()
    .required('Password is required.')
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.flexContainer}>
      <FormikTextInput style={styles.inputButtons} name="username" placeholder="Username" />
      <FormikTextInput style={styles.inputButtons} name="password" placeholder="Password" secureTextEntry />
      <TouchableOpacity onPress={onSubmit}>
        <View style={styles.signButton}>
          <Text style={{ textAlign: 'center' }} color="appBar" fontWeight="appBar" fontSize="appBar">Sign in</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const SignIn = () => {
  const [signIn, result] = useSignIn();
  const [token, setToken] = useState();

  useEffect(() => {
    if (result.data) {
      setToken(result.data.authorize.accessToken);
    }
  }, [result.data]);

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {  
      await signIn({ username, password });
    } catch (e) {
      console.log(e.message);
    }
  };

  console.log(token);


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};



const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex'
  },
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