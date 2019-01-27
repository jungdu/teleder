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
import { Router, Route } from "react-router-dom";
import QuoteList from "./components/QuoteList";
import QuoteDetail from "./components/QuoteDetail";
import QuoteCreate from "./components/QuoteCreate";
import history from './history';

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
  <Router history={history}>
    <ApolloProvider client={client}>
      <App>
        <Route path='/' exact component={QuoteList} />
        <Route path='/list' component={QuoteList} />
        <Route path='/detail/:quoteId' component={QuoteDetail} />
        <Route path='/create' component={QuoteCreate} />
      </App>
    </ApolloProvider>
  </Router>
);

ReactDOM.render(<RootComp />, document.getElementById('root'));

serviceWorker.unregister();
