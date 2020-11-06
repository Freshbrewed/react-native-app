import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: theme.backgroundColor.appBar
  },
  // ...
});

const AppBar = () => {
  return <View style={styles.container}>{/* ... */}
      <TouchableWithoutFeedback onPress={() => console.log('click!')}>
             <Text color="appBar" fontWeight="appBar" fontSize="appBar" padding='appBar'>
                Repositories
            </Text>
      </TouchableWithoutFeedback>
        </View>;
};

export default AppBar;