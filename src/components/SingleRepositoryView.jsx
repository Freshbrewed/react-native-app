import React from 'react';
import { Text, View } from 'react-native';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryItem';

const getId = () => {
    let { id } = useParams();
    return id;
};

const SingleRepositoryView = () => {
    const id = getId();
    const { repository, loading } = useRepository(id);


    if (loading ) return (
        <View><Text>Loading . . .</Text></View>
    );

    return <RepositoryItem item={repository} singleView={true} />;
};

export default SingleRepositoryView;