import { ApolloClient, createHttpLink, HttpLink, InMemoryCache } from '@apollo/client';
import { LocalStorageWrapper, persistCache } from 'apollo3-cache-persist';

import { isSSR } from './utilities';

const baseURL = process.env.APP_BASE_URL || 'http://localhost:3000';

const cache = new InMemoryCache();

if (!isSSR()) {
  const storage = new LocalStorageWrapper(window.localStorage);

  persistCache({
    cache: cache,
    storage: storage,
  }).then();
}

const link = createHttpLink({
  uri: `${baseURL}/graphql`,
  credentials: 'same-origin',
});

export const client = new ApolloClient({
  ssrMode: isSSR(),
  link: link,
  cache: cache,
});
