import { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { UseClientProps } from "types";
import { setIsFetching } from "uiSlice";
import Client from "../../services/Client";

export function useRetrieve<T>({ path, queryOptions = {} }: Omit<UseClientProps<T>, "id">) {
  const query = useQuery<T, Error>(path, ({ signal }) => Client.retrieve(path, { signal }), queryOptions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsFetching(query.isFetching && !query.isLoading));

    return () => {
      dispatch(setIsFetching(false));
    };
  }, [dispatch, query.isFetching, query.isLoading]);

  return query;
}
