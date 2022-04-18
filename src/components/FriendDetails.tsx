import React from "react";
import { useParams } from "react-router-dom";

export default function FriendDetails() {
  const { friendId } = useParams();
  return <div>Friend {friendId}</div>;
}
