import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
query {
  repositories  {
    edges {
      node {
        id
        ownerName
        name
        createdAt
        fullName
        reviewCount
        ratingAverage
        stargazersCount
        watchersCount
        forksCount
        openIssuesCount
        url
        ownerAvatarUrl
        description
        language
      }
    }
  }
}
`;

export const IS_AUTHORIZED = gql`
query {
  authorizedUser {
    id
    username
  }
}
`;

export const GET_REPOSITORY = gql`
query repository($id: ID!) {
    repository(id: $id) {
      ownerName
      name
      createdAt
      fullName
      reviewCount
      ratingAverage
      stargazersCount
      watchersCount
      forksCount
      openIssuesCount
      url
      ownerAvatarUrl
      description
      language
    }
  }

`;