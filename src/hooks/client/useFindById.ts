import { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import Client from "services/Client";
import { UseClientProps } from "types";
import { setIsFetching } from "uiSlice";

export function useFindById<T>({ path, id, options = {} }: UseClientProps<T>) {
  const query = useQuery<T, Error>([path, id], ({ signal }) => Client.findById(path, id, { signal }), options);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsFetching(query.isFetching && !query.isLoading));

    return () => {
      dispatch(setIsFetching(false));
    };
  }, [dispatch, query.isFetching, query.isLoading]);

  return query;
}
