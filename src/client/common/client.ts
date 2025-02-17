import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { LocalStorageWrapper, persistCache } from 'apollo3-cache-persist';

import { baseURL } from './utilities';

const persist = async (cache: InMemoryCache, storage: LocalStorageWrapper) => {
  await persistCache({
    cache: cache,
    storage: storage,
  });
};

export const client = () => {
  const cache = new InMemoryCache().restore(window['__APOLLO_STATE__']);
  const storage = new LocalStorageWrapper(window.localStorage);

  (async function () {
    await persist(cache, storage);
  })();

  const link = createHttpLink({
    uri: `${baseURL}/graphql`,
    credentials: 'same-origin',
  });

  return new ApolloClient({
    link: link,
    cache: cache,
  });
};
