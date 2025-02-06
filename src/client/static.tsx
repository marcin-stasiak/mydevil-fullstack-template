import { StaticRouter } from 'react-router';
import { App } from './app';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './common/client';

export const StaticMain = ({ location }) => (
  <ApolloProvider client={client}>
    <StaticRouter location={location}>
      <App />
    </StaticRouter>
  </ApolloProvider>
);
