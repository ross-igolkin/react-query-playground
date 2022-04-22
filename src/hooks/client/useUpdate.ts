import { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { UseClientProps } from "types";
import { setIsFetching } from "uiSlice";
import Client from "../../services/Client";

export function useUpdate<T>({ path, id, queryOptions = {}, reqOptions }: UseClientProps<T>) {
  const query = useQuery<T, Error>(
    path,
    ({ signal }) => Client.update(path, id, { signal, ...reqOptions }),
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
