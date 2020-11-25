import React from 'react';
import RepositoryItem from './RepositoryItem';
import { Text, FlatList, View, StyleSheet } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import theme from '../theme';

const styles = StyleSheet.create({
  separator: theme.separator
});

export const RepositoryListContainer = ({ repositories, loading }) => {
  if (loading) return (
    <View>
      <Text>Loading . . .</Text>
    </View>
  );
  const ItemSeparator = () => <View style={styles.separator} />;

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={ItemSeparator}

      extraData={repositories}
      renderItem={({ item }) => (
        <RepositoryItem item={item} />
      )
      }
    />
  );
};

const RepositoryList = () => {
  const { repositories, loading } = useRepositories();
  return <RepositoryListContainer repositories={repositories} loading={loading} />;
};

export default RepositoryList;