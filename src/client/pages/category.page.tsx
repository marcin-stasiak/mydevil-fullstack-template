import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { CATEGORY_QUERY } from '../common/graphql/category.query';
import { ErrorPage } from './error.page';

export const CategoryPage: FunctionComponent = () => {
  const { slug } = useParams();
  const { error, data } = useQuery(CATEGORY_QUERY, {
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
