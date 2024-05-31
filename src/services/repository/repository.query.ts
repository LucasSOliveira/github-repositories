import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query SearchRepositories($query: String!, $first: Int!) {
    search(query: $query, type: REPOSITORY, first: $first) {
      nodes {
        ... on Repository {
          id
          name
          owner {
            login
            avatarUrl(size: 100)
          }
          description
          stargazers {
            totalCount
          }
          primaryLanguage {
            name
            color
          }
          updatedAt
        }
      }
    }
  }
`;


export const GET_REPOSITORY_DETAILS = gql`
query RepositoryDetails($owner: String!, $name: String!) {
  repository(owner: $owner, name: $name) {
    url
    issues(first: 10, states: OPEN) {
      totalCount
    }
    pullRequests(first: 10, states: OPEN) {
      totalCount
    }
    defaultBranchRef {
      target {
        ... on Commit {
          history(first: 1) {
            totalCount
          }
        }
      }
    }
  }
}
`;
