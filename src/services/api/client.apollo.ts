import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const token = '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';
const api = 'https://api.github.com/graphql';

const httpLink = new HttpLink({
  uri: api,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default client;