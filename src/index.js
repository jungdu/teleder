import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ApolloLink } from 'apollo-client-preset';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' });

// Middleware to set the headers
const middlewareAuthLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('token');
  const authorizationHeader = token ? `Bearer ${token}` : null
  operation.setContext({
    headers: {
      authorization: authorizationHeader,
    },
  });

  return forward(operation);
 });

const httpLinkWithAuthToken = middlewareAuthLink.concat(httpLink);

const client = new ApolloClient({
    link: httpLinkWithAuthToken,
    cache: new InMemoryCache(),
  });

const RootComp = () => (
    <ApolloProvider client={client}>
      <App> 
      </App>
    </ApolloProvider>
);

ReactDOM.render(<RootComp />, document.getElementById('root'));

serviceWorker.unregister();
