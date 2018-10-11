// export default new ApolloClient({
//   uri: 'http://localhost:3000/graphql',
// });

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import {resolvers, defaults} from './resolvers'


const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // const token = localStorage.getItem('token');


  // to login
  // mutation {
  //   signinUser(
  //     email: {
  //       email: "jstoebel@gmail.com"	
	// 			password: "abc123"
  //     }
  //   ) {
  //     token
  //   }
  // }

  // CHANGE ME!
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1MzkzNzcyNjcsImlzcyI6Imlzc3Vlcl9uYW1lIiwiYXVkIjoiY2xpZW50In0.2W_knPhXqZfsR_FJY6FVCtT6VZ3UNU4jEJk4Z6QJwd0'
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const clientState = withClientState({ resolvers, defaults })

export default new ApolloClient({
  link: authLink.concat(clientState).concat(httpLink),
  cache: new InMemoryCache(),
});
