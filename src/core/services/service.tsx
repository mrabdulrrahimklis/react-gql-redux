import ApolloClient, { InMemoryCache } from "apollo-boost";

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});
