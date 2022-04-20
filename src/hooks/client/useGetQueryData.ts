import { QueryKey, useQueryClient } from "react-query";
import { QueryFilters } from "react-query/types/core/utils";

export function useGetQueryData<T>(key: QueryKey, filters?: QueryFilters | undefined) {
  const queryClient = useQueryClient();
  return queryClient.getQueryData<T>(key, filters);
}
