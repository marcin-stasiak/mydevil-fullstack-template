import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { ENTRY_QUERY } from '../common/graphql/entry.query';

export const PostPage: FunctionComponent = () => {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(ENTRY_QUERY, {
    variables: {
      slug: slug,
    },
    fetchPolicy: 'network-only',
  });

  return (
    <>
      <h1>{data?.entry.title}</h1>
    </>
  );
};
