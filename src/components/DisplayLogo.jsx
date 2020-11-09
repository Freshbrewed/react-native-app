import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 15,
    width: 65
  },
  logo: {
    width: 50,
    height: 50,
  },
});

const DisplayImage = ({ uriLink }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: uriLink,
        }}
      />
    </View>
  );
};

export default DisplayImage;