import React from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgroundColor.appBar
  },
});
 

const AppBar = () => {
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