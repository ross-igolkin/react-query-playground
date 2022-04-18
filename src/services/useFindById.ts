
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { setIsFetching } from "uiSlice";
import Client from "./Client";

export default function useFindById <T>(path: string, id: string) {

    const query = useQuery<
    T,
    Error
  >([path, id], () => Client.findById(path, id), {});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsFetching(query.isFetching && !query.isLoading));

    return () => {
      dispatch(setIsFetching(false));
    };
  }, [dispatch, query.isFetching, query.isLoading]);

  return query
  
}
