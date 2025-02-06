import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { ApolloProvider } from '@apollo/client';

import { App } from './app';
import { client } from './common/client';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
);
