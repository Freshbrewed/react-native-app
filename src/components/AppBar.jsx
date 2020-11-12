import React, { useContext } from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import theme from '../theme';
import userIsAuthorized from '../hooks/userIsAuthorized';
import { useApolloClient } from '@apollo/client';
import AuthStorageContext from '../contexts/AuthStorageContext';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgroundColor.appBar
  },
});

const AppBar = () => {
  const authStorage = useContext(AuthStorageContext);
  const { user, loading } = userIsAuthorized();
  const apolloClient = useApolloClient();

  const handleLogout = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  if (loading) {
    return (
      <View></View>
    );
  }
  if (user) {
    return (
      <View style={styles.container}>
        <ScrollView horizontal>
          <View>
            <Link to="/" component={TouchableOpacity}>
              <Text color="appBar" fontSize="appBar" padding="appBar">Repositories</Text>
            </Link>
          </View>
          <View>
            <TouchableOpacity onPress={handleLogout}>
              <Text color="appBar" fontSize="appBar" padding="appBar">Sign Out</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View>
          <Link to="/" component={TouchableOpacity}>
            <Text color="appBar" fontSize="appBar" padding="appBar">Repositories</Text>
          </Link>
        </View>
        <View>
          <Link to="/signin" component={TouchableOpacity}>
            <Text color="appBar" fontSize="appBar" padding="appBar">Sign in</Text>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
};

export default AppBar;