import { Skeleton } from "@mui/material";
import Box from "@mui/material/Box";
import { useFindById } from "hooks";
import { useParams } from "react-router-dom";
import { Friend } from "types";

export default function FriendDetails() {
  const { friendId } = useParams();

  const { data, isLoading } = useFindById<Friend>("friends", friendId!);

  return isLoading ? (
    <Skeleton width={100} />
  ) : (
    <Box>
      {data?.name} {data?.age}
    </Box>
  );
}
