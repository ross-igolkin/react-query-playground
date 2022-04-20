import { QueryKey, UseQueryOptions } from "react-query";

export type ClientUrl = "user/me" | "submission";

export interface UseClientProps<T> {
  path: ClientUrl;
  id: string;
  options?: Omit<UseQueryOptions<T, Error, T, QueryKey>, "queryKey" | "queryFn">;
}

export interface UseClientListProps<T> {
  path: ClientUrl;
  options?: Omit<UseQueryOptions<T[] | undefined, Error, T[] | undefined, QueryKey>, "queryKey" | "queryFn">;
}

export interface List<T> {
  count?: number;
  items?: T[];
}
