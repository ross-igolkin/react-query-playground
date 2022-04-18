import { CircularProgress, Skeleton } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Client from "services/Client";
import { Friend } from "types";

export default function FriendDetails() {
  const { friendId } = useParams();

  const { data, isLoading, isFetching } = useQuery<Friend, Error>(
    ["query-friend", friendId],
    () => Client.findById("friends", friendId),
    {}
  );

  return isLoading ? (
    <Skeleton width={100} />
  ) : (
    <Box>
      {data?.name} {data?.age}
      {isFetching && <CircularProgress size={10} />}
    </Box>
  );
}
