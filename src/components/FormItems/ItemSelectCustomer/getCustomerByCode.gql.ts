import * as Types from '../../../generated/graphql.d.js';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { gqlFetcher } from 'configs/graphql';
export type GetCustomerByCodeQueryVariables = Types.Exact<{
  id?: Types.Maybe<Types.Scalars['String']>;
}>;


export type GetCustomerByCodeQuery = (
  { __typename?: 'query_root' }
  & { cpeschema_customers_by_pk?: Types.Maybe<(
    { __typename?: 'cpeschema_customers' }
    & Pick<Types.Cpeschema_Customers, 'name'>
  )> }
);


export const GetCustomerByCodeDocument = `
    query getCustomerByCode($id: String = "") {
  cpeschema_customers_by_pk(sapCode: $id) {
    name
  }
}
    `;
export const useGetCustomerByCodeQuery = <
      TData = GetCustomerByCodeQuery,
      TError = unknown
    >(
      variables?: GetCustomerByCodeQueryVariables,
      options?: UseQueryOptions<GetCustomerByCodeQuery, TError, TData>
    ) =>
    useQuery<GetCustomerByCodeQuery, TError, TData>(
      variables === undefined ? ['getCustomerByCode'] : ['getCustomerByCode', variables],
      gqlFetcher<GetCustomerByCodeQuery, GetCustomerByCodeQueryVariables>(GetCustomerByCodeDocument, variables),
      options
    );
useGetCustomerByCodeQuery.fetcher = (variables?: GetCustomerByCodeQueryVariables, options?: RequestInit['headers']) => gqlFetcher<GetCustomerByCodeQuery, GetCustomerByCodeQueryVariables>(GetCustomerByCodeDocument, variables, options);