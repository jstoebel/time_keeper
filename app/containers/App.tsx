import * as React from 'react';
import { ApolloProvider } from "react-apollo";
import client from '../apollo_client';


export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          {this.props.children}
        </div>
      </ApolloProvider>
    );
  }
}
