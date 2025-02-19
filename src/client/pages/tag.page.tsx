import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { TAG_QUERY } from '../common/graphql/tag.query';
import { ErrorPage } from './error.page';

export const TagPage: FunctionComponent = () => {
  const { slug } = useParams();
  const { error, data } = useQuery(TAG_QUERY, {
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
