import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Text from './Text';
import DisplayLogo from './DisplayLogo';
import theme from '../theme';
import { useHistory } from "react-router-native";
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
  flexContainer: theme.flexContainer,
  flexItemRow: theme.flexItemRow,
  flexLastItemRow: theme.flexLastItemRow,
  flexItemCol: theme.flexItemCol,
  logo: theme.logo,
  languageDisplay: theme.languageDisplay,
  languageWrapper: theme.languageWrapper,
  gitUrlDisplay: theme.gitLink,
  separator: {
    backgroundColor: theme.separator.backgroundColor,
    height: Dimensions.get('window').height

  }
});

const formatter = (number) => {
  if (number < 1e3) return number;
  if (number >= 1e3) return + (number / 1e3).toFixed(1) + "K";
};

const RepositoryItem = ({ item, loading, singleView }) => {
  let history = useHistory();


  const handleClick = (item) => {
    history.push(`/${item.id}`);
  };

  const handleLinkClick = (url) => {
    Linking.openURL(url);
  };

  if (loading || item === undefined) return (
    <View><Text>Loading . . .</Text></View>
  );

  if (singleView) return (
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

    <TouchableOpacity onPress={() => handleLinkClick(item.url)}>
      <View style={styles.flexItemRow}>
        <View style={styles.gitUrlDisplay} >
          <Text style={{ textAlign: 'center' }} color="appBar" fontWeight="bold" fontSize="subheading">Open in GitHub</Text>
        </View>
      </View>
   </TouchableOpacity>

   <View style={styles.separator}/>

    </View>
  );

  return (
    <TouchableOpacity onPress={() => handleClick(item)}>
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
    </TouchableOpacity>
  );
};

export default RepositoryItem;