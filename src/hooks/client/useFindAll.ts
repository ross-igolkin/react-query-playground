import { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { UseClientListProps } from "types";
import { setIsFetching } from "uiSlice";
import Client from "../../services/Client";

export function useFindAll<T>({ path, options = {} }: UseClientListProps<T>) {
  const query = useQuery<T[] | undefined, Error>(path, ({ signal }) => Client.findAll(path, { signal }), options);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsFetching(query.isFetching && !query.isLoading));

    return () => {
      dispatch(setIsFetching(false));
    };
  }, [dispatch, query.isFetching, query.isLoading]);

  return query;
}
