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
    flexDirection: 'row',
  },
  flexLastItemRow: {
    flexGrow: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    paddingBottom: 15
  },
  flexItemCol: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexShrink: 1,
    paddingLeft: 10
  },
  logo: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  languageDisplay: {
    borderWidth: 4,
    borderRadius: 4,
    margin: 5,
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.primary,
  },
  languageWrapper: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 10,
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
      <View style={styles.flexItemCol}>
        <Text style={{ paddingTop: 20 }} fontWeight="bold" testID="fullname"> {item.fullName}</Text>
        <Text style={{ paddingTop: 5 }} color="textSecondary" testID="description" > {item.description}</Text>
        <View style={styles.languageWrapper}>
          <View style={styles.languageDisplay}>
            <Text color="appBar" fontWeight="bold" fontSize="subheading" testID="language"> {item.language}</Text>
          </View>
        </View>
      </View>
    </View>

    <View style={styles.flexLastItemRow}>
      <View style={styles.flexItemCol}>
        <Text fontWeight="bold" testID="starCount">{formatter(item.stargazersCount)}</Text>
        <Text color="textSecondary">Stars</Text>
      </View>
      <View style={styles.flexItemCol}>
        <Text fontWeight="bold" testID="forksCount">{formatter(item.forksCount)}</Text>
        <Text color="textSecondary">Forks</Text>
      </View>
      <View style={styles.flexItemCol}>
        <Text style={{ textAlign: 'center' }} fontWeight="bold" testID="reviewCount">{item.reviewCount}</Text>
        <Text color="textSecondary">Reviews</Text>
      </View>
      <View style={styles.flexItemCol}>
        <Text fontWeight="bold" testID="rating">{item.ratingAverage}</Text>
        <Text color="textSecondary">Rating</Text>
      </View>
    </View>
  </View>
);

export default RepositoryItem;