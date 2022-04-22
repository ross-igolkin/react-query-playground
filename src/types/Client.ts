import { AxiosRequestConfig } from "axios";
import { QueryKey, UseQueryOptions } from "react-query";

export type ClientUrl = "user/me" | "submission" | "contact";

export interface UseClientProps<T> {
  path: ClientUrl;
  id: string;
  queryOptions?: Omit<UseQueryOptions<T, Error, T, QueryKey>, "queryKey" | "queryFn">;
  reqOptions?: AxiosRequestConfig<any> | undefined;
}

export interface UseClientArrayProps<T> {
  path: ClientUrl;
  queryOptions?: Omit<UseQueryOptions<T[] | undefined, Error, T[] | undefined, QueryKey>, "queryKey" | "queryFn">;
  reqOptions?: AxiosRequestConfig<any> | undefined;
}

export interface UseClientListProps<T> {
  path: ClientUrl;
  offset?: number;
  limit?: number;
  queryOptions?: Omit<
    UseQueryOptions<List<T> | undefined, Error, List<T> | undefined, QueryKey>,
    "queryKey" | "queryFn"
  >;
  reqOptions?: AxiosRequestConfig<any> | undefined;
}

export interface List<T> {
  count?: number;
  items?: T[];
}
