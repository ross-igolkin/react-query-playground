import { useEffect } from "react";
import { useQuery, QueryClient, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { List, UseClientListProps } from "types";
import { setIsFetching } from "uiSlice";
import Client from "../../services/Client";

export function useSearch<T>({ path, offset = 0, limit = 0, queryOptions = {}, reqOptions }: UseClientListProps<T>) {
  const query = useQuery<List<T> | undefined, Error>(
    [path, offset],
    ({ signal }) =>
      Client.search(path, { signal, ...reqOptions, params: { offset, limit: limit, ...reqOptions?.params } }),
    { staleTime: 10 * 1000, ...queryOptions }
  );
  const dispatch = useDispatch();

  const queryClient = useQueryClient();

  const prefetchSearch = async () => {
    // The results of this query will be cached like a normal query
    await queryClient.prefetchQuery([path, offset + limit], ({ signal }) =>
      Client.search(path, {
        signal,
        ...reqOptions,
        params: { offset: offset + limit, limit: limit, ...reqOptions?.params },
      })
    );
  };

  useEffect(() => {
    dispatch(setIsFetching(query.isFetching && !query.isLoading));

    return () => {
      dispatch(setIsFetching(false));
    };
  }, [dispatch, query.isFetching, query.isLoading]);

  useEffect(() => {
    if (query.data?.count && query.data?.count > offset + limit) {
      prefetchSearch();
    }
  }, [query.data?.count, offset, limit]);

  return query;
}
