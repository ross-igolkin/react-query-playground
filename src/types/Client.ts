import { QueryKey, UseQueryOptions } from "react-query"

 export type ClientUrl = 'friends' | 'user/me'


 export interface UseClientProps<T> {
    path: ClientUrl, 
    id: string;
    options?: Omit<UseQueryOptions<T[], Error, T[], QueryKey>, "queryKey" | "queryFn"> 
  }

  export interface UseDynamicClientProps<T> {
    path: ClientUrl, 
    id: string;
    options?: Omit<UseQueryOptions<T, Error, T, QueryKey>, "queryKey" | "queryFn">
  }
