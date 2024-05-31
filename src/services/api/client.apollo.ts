import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const api = 'https://api.github.com/graphql';

const httpLink = new HttpLink({
  uri: api,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default client;