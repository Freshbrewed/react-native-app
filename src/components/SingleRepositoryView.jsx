import React from 'react';
import { View, FlatList } from 'react-native';
import Text from './Text';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryItem';
import { format } from 'date-fns';

import theme from '../theme';

const getId = () => {
    let { id } = useParams();
    return id;
};

const ReviewItem = ({ review }) => {
    return (
        <View style={theme.flexContainer}>


            <View style={theme.flexItemRow}>
                <View style={theme.flexItemCol}>
                    <View style={theme.ratingContainer, { padding: 10 }}>
                        <Text style={{ fontSize: 25, }} color="primary">
                            {review.rating}
                        </Text>
                    </View>
                </View>
                <View style={theme.flexItemCol, { padding: 10, paddingLeft: 5 }}>
                    <Text fontWeight="bold">
                        {review.user.username}
                    </Text>
                    <Text color="textSecondary">
                        {format(new Date(review.createdAt), 'dd-MM-yyyy')}
                    </Text>
                </View>

            </View>
            <View style={theme.flexItemRow, {paddingLeft: 60, paddingRight: 10, paddingBottom: 20}/*, {justifyContent: "flex-start", flexShrink: 1, flexDirection: "row"}*/}>
                <Text /*style={{ textAlign: "center" }}*/>
                    {review.text}
                </Text>
            </View>

        </View>
    );
};

const SingleRepositoryView = () => {
    const id = getId();
    const { repository, loading } = useRepository(id);

    if (loading) return (
        <View><Text>Loading . . .</Text></View>
    );

    const reviewNodes = repository
        ? repository.reviews.edges.map((edge) => edge.node)
        : [];

    const ItemSeparator = () => <View style={theme.separator} />;

    return (
        <FlatList
            data={reviewNodes}
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={({ id }) => id}
            ItemSeparatorComponent={ItemSeparator}
            ListHeaderComponent={() => <RepositoryItem item={repository} singleView={true} />}
        />
    );
    // return <RepositoryItem item={repository} singleView={true} />;
};

export default SingleRepositoryView;