import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const token = import.meta.env.VITE_GITHUB_TOKEN;
console.log('token', token);

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