import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorTextAppBar: {
    color: theme.colors.appBar
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontSizeAppBar: {
    fontSize: theme.fontSizes.appBar,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  fontWeightAppBar: {
    fontWeight: theme.fontWeights.appBar,
  },
  textPaddingAppBar: {
    padding: theme.paddingBottom.appBar
  }
});

const Text = ({ color, fontSize, fontWeight, style, padding, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color === 'appBar' && styles.colorTextAppBar,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontSize === 'appBar' && styles.fontSizeAppBar,
    fontWeight === 'bold' && styles.fontWeightBold,
    fontWeight === 'appBar' && styles.fontWeightAppBar,
    padding === 'appBar' && styles.textPaddingAppBar,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;