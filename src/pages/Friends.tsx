import FriendItem from "../components/FriendItem";
import { Friend } from "types";
import List from "@mui/material/List";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import ListItemButton from "@mui/material/ListItemButton";
import { useFindAll } from "hooks";

export default function Posts() {
  const { data, isError, isLoading, error } = useFindAll<Friend>("friends");

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <List>
          {isLoading &&
            Array(10)
              .fill("")
              .map((_, i) => (
                <ListItemButton key={i}>
                  <Skeleton width={100} />
                </ListItemButton>
              ))}

          {data?.map((friend: Friend) => (
            <FriendItem key={friend.id} {...friend} />
          ))}
        </List>
      </Grid>
      <Grid item xs={9}>
        <Outlet />
      </Grid>
    </Grid>
  );
}
