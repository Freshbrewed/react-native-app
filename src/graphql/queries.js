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
export const LOGIN = gql`
mutation login($credentials: AuthorizeInput!) {
  authorize(credentials: $credentials ) {
    accessToken
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