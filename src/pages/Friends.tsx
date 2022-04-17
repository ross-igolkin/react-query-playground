import { useQuery } from "react-query";
import axios from "axios";
import FriendItem from "../components/FriendItem";
import { Friend } from "../types";

const getFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

export default function Posts() {
  const { data, isLoading } = useQuery("friends", getFriends);

  if (isLoading) {
    return <div>Is Loading...</div>;
  }

  return (
    <div>
      {data?.data.map((friend: Friend) => (
        <FriendItem key={friend.id} {...friend} />
      ))}
    </div>
  );
}
