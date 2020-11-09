import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import DisplayLogo from './DisplayLogo';
import theme from '../theme';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
  },
  flexItemRow: {
    flexGrow: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    // flexWrap: 'wrap',

  },
  flexLastItemRow: {
    flexGrow: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    paddingBottom: 15
  },
  flexItemCol: {
    flexGrow: 0,
    flexDirection: 'column',

  },
  alignWithLogo: {
    flexGrow: 1,
    flexDirection: 'column',
    paddingTop: 20,
    paddingLeft: 20,
    justifyContent: 'space-evenly',
  },
  languageDisplay: {
    flexGrow: 0,
    flexDirection: 'column',
    borderWidth: 4,
    borderRadius: 4,
    margin: 5,
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.primary,
  },
  languageWrapper: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 80,
    paddingBottom: 10
  }
});

const formatter = (number) => {
  if (number < 1e3) return number;
  if (number >= 1e3) return + (number / 1e3).toFixed(1) + "K";
};

const RepositoryItem = ({ item }) => (
  <View style={styles.flexContainer}>
    <View style={styles.flexItemRow}>
      <DisplayLogo uriLink={item.ownerAvatarUrl} />
      <View style={styles.alignWithLogo}>
        <Text fontWeight="bold"> {item.fullName}</Text>
        <Text color="textSecondary"> {item.description}</Text>
      </View>
    </View>
    <View style={styles.languageWrapper}>
      <View style={styles.languageDisplay}>
        <Text color="appBar" fontWeight="bold" fontSize="subheading"> {item.language}</Text>
      </View>
    </View>
    <View style={styles.flexLastItemRow}>
      <View style={styles.flexItemCol}>
        <Text fontWeight="bold">{formatter(item.stargazersCount)}</Text>
        <Text color="textSecondary">Stars</Text>
      </View>
      <View style={styles.flexItemCol}>
        <Text fontWeight="bold">{formatter(item.forksCount)}</Text>
        <Text color="textSecondary">Forks</Text>
      </View>
      <View style={styles.flexItemCol}>
        <Text fontWeight="bold">{item.reviewCount}</Text>
        <Text color="textSecondary">Reviews</Text>
      </View>
      <View style={styles.flexItemCol}>
        <Text fontWeight="bold">{item.ratingAverage}</Text>
        <Text color="textSecondary">Rating</Text>
      </View>
    </View>
  </View>
);

export default RepositoryItem;