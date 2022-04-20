import { QueryKey, useQueryClient } from "react-query";

export function useGetFetchQuery<T>(key: QueryKey) {
  const queryClient = useQueryClient();

  return queryClient.getQueryData<T>(key);
}
