import { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { List, UseClientListProps } from "types";
import { setIsFetching } from "uiSlice";
import Client from "../../services/Client";

export function useSearch<T>({ path, offset = 0, limit, queryOptions = {}, reqOptions }: UseClientListProps<T>) {
  const query = useQuery<List<T> | undefined, Error>(
    [path, offset],
    ({ signal }) =>
      Client.search(path, { signal, ...reqOptions, params: { offset, limit: limit, ...reqOptions?.params } }),
    queryOptions
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsFetching(query.isFetching && !query.isLoading));

    return () => {
      dispatch(setIsFetching(false));
    };
  }, [dispatch, query.isFetching, query.isLoading]);

  return query;
}
