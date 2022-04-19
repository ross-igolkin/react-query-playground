
import { useEffect } from "react";
import {  useQuery } from "react-query";
import { useDispatch } from "react-redux";
import {  List, UseClientListProps } from "types";
import { setIsFetching } from "uiSlice";
import Client from "../../services/Client";


export default function useFindAll <T>({path, options = {}}:UseClientListProps<T>) {

    const query = useQuery<
    List<T>,
    Error
  >(path, () => Client.findAll(path),options);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsFetching(query.isFetching && !query.isLoading));

    return () => {
      dispatch(setIsFetching(false));
    };
  }, [dispatch, query.isFetching, query.isLoading]);

  return query

}