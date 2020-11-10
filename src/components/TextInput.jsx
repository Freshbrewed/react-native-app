import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  invalid: {
    borderColor: '#d73a4a',
    borderWidth: 2
  }
});

const TextInput = ({ style, error, ...props }) => {

  if (error) {
    const errorStyle = [
      style,
      styles.invalid,
    ];
    return (
      <NativeTextInput style={errorStyle} {...props} />
    );
  }
  return <NativeTextInput style={style} {...props} />;
};

export default TextInput;