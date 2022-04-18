import { useQuery } from "react-query";
import axios from "axios";
import FriendItem from "../components/FriendItem";
import { Friend } from "../types";
import List from "@mui/material/List";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";

const getFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

export default function Posts() {
  const { data, isLoading } = useQuery("friends", getFriends);

  if (isLoading) {
    return <div>Is Loading...</div>;
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <List>
          {data?.data.map((friend: Friend) => (
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
