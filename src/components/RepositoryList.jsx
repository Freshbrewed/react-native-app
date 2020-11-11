import React from 'react';
import RepositoryItem from './RepositoryItem';
import { Text, FlatList, View, StyleSheet } from 'react-native';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: "#e1e4e8"
  },
});

const RepositoryList = () => {
  const { repositories, loading } = useRepositories();

  if (loading) return (
    <View>
      <Text>Loading . . .</Text>
    </View>
  );
  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={item => item.id}
      extraData={repositories}
      renderItem={({ item }) => (
        <RepositoryItem item={item} />
      )
      }
    />
  );
};

export default RepositoryList;