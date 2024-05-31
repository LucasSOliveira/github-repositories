import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const token = process.env.REACT_APP_GITHUB_TOKEN;
const httpLink = new HttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default client;