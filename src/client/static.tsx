import { StaticRouter } from 'react-router';
import { App } from './app';
import React from 'react';
import { ApolloClient, ApolloProvider, NormalizedCacheObject } from '@apollo/client';

export const StaticMain = (location: string, client: ApolloClient<NormalizedCacheObject>) => (
  <ApolloProvider client={client}>
    <StaticRouter location={location}>
      <App />
    </StaticRouter>
  </ApolloProvider>
);
