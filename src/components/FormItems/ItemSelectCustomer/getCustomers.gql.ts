import * as Types from '../../../generated/graphql.d.js';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { gqlFetcher } from 'configs/graphql';
export type GetCustomersQueryVariables = Types.Exact<{
  searchQuery: Types.String_Comparison_Exp;
  selectedQuery: Types.String_Comparison_Exp;
}>;


export type GetCustomersQuery = (
  { __typename?: 'query_root' }
  & { cpeschema_customers: Array<(
    { __typename?: 'cpeschema_customers' }
    & Pick<Types.Cpeschema_Customers, 'country' | 'name' | 'sapCode' | 'state' | 'type'>
  )>, selected: Array<(
    { __typename?: 'cpeschema_customers' }
    & Pick<Types.Cpeschema_Customers, 'country' | 'name' | 'sapCode' | 'state' | 'type'>
  )> }
);


export const GetCustomersDocument = `
    query getCustomers($searchQuery: String_comparison_exp!, $selectedQuery: String_comparison_exp!) {
  cpeschema_customers(
    where: {_or: [{name: $searchQuery}, {sapCode: $searchQuery}]}
    order_by: {name: asc}
    limit: 20
  ) {
    country
    name
    sapCode
    state
    type
  }
  selected: cpeschema_customers(where: {sapCode: $selectedQuery}, limit: 1) {
    country
    name
    sapCode
    state
    type
  }
}
    `;
export const useGetCustomersQuery = <
      TData = GetCustomersQuery,
      TError = unknown
    >(
      variables: GetCustomersQueryVariables,
      options?: UseQueryOptions<GetCustomersQuery, TError, TData>
    ) =>
    useQuery<GetCustomersQuery, TError, TData>(
      ['getCustomers', variables],
      gqlFetcher<GetCustomersQuery, GetCustomersQueryVariables>(GetCustomersDocument, variables),
      options
    );
useGetCustomersQuery.fetcher = (variables: GetCustomersQueryVariables, options?: RequestInit['headers']) => gqlFetcher<GetCustomersQuery, GetCustomersQueryVariables>(GetCustomersDocument, variables, options);