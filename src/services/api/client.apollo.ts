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