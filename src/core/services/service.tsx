import ApolloClient, {InMemoryCache} from "apollo-boost";

export const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    // uri: process.env.REACT_APP_API_URL,
    cache: new InMemoryCache(),
});