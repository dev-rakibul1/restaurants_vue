import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";

const httpLink = new HttpLink({
  uri: "https://restaurants-gql-apis.onrender.com/", // Replace with your GraphQL endpoint
  // uri: "http://localhost:4000/graphql", // Replace with your GraphQL endpoint
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

export default apolloClient;
