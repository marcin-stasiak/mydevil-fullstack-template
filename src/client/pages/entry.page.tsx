import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { ENTRY_QUERY } from '../common/graphql/entry.query';
import { ErrorPage } from './error.page';

export const EntryPage: FunctionComponent = () => {
  const { slug } = useParams();
  const { error, data } = useQuery(ENTRY_QUERY, {
    variables: {
      slug: slug,
    },
    fetchPolicy: 'cache-and-network',
  });

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      <h1>{data?.entry.title}</h1>
    </>
  );
};
