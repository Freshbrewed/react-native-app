import React from 'react';
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';

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
    textAlign: 'center'
  }

});

const initialValues = {
  username: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.flexContainer}>
      <FormikTextInput style={styles.inputButtons} name="username" placeholder="Username" />
      <FormikTextInput style={styles.inputButtons} name="password" placeholder="Password" secureTextEntry />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <View style={styles.signButton}>
          <Text color="appBar" fontWeight="appBar" fontSize="appBar">Sign in</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export const SignIn = () => {
  const onSubmit = values => {
    console.log('click', values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;