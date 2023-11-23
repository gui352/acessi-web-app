import * as Types from '../../../generated/graphql.d.js';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { gqlFetcher } from 'configs/graphql';
export type GetUserListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetUserListQuery = (
  { __typename?: 'query_root' }
  & { cpeusers_users: Array<(
    { __typename?: 'cpeusers_users' }
    & Pick<Types.Cpeusers_Users, 'id' | 'username' | 'ramal'>
  )> }
);


export const GetUserListDocument = `
    query getUserList {
  cpeusers_users(where: {active: {_eq: true}}) {
    id
    username
    ramal
  }
}
    `;
export const useGetUserListQuery = <
      TData = GetUserListQuery,
      TError = unknown
    >(
      variables?: GetUserListQueryVariables,
      options?: UseQueryOptions<GetUserListQuery, TError, TData>
    ) =>
    useQuery<GetUserListQuery, TError, TData>(
      variables === undefined ? ['getUserList'] : ['getUserList', variables],
      gqlFetcher<GetUserListQuery, GetUserListQueryVariables>(GetUserListDocument, variables),
      options
    );
useGetUserListQuery.fetcher = (variables?: GetUserListQueryVariables, options?: RequestInit['headers']) => gqlFetcher<GetUserListQuery, GetUserListQueryVariables>(GetUserListDocument, variables, options);