
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import Client from "services/Client";
import {  UseDynamicClientProps } from "types";
import { setIsFetching } from "uiSlice";

export default function useFindById <T>({path, id, options = {}}:UseDynamicClientProps<T>) {

    const query = useQuery<
    T,
    Error
  >([path, id], () => Client.findById(path, id), options);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsFetching(query.isFetching && !query.isLoading));

    return () => {
      dispatch(setIsFetching(false));
    };
  }, [dispatch, query.isFetching, query.isLoading]);

  return query
  
}
