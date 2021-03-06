import { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { UseClientArrayProps } from "types";
import { setIsFetching } from "uiSlice";
import Client from "../../services/Client";

export function useFindAll<T>({ path, queryOptions = {}, reqOptions }: UseClientArrayProps<T>) {
  const query = useQuery<T[] | undefined, Error>(
    path,
    ({ signal }) => Client.findAll(path, { signal, ...reqOptions }),
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
