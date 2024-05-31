import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer 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`,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default client;