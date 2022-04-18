import ListItemButton from "@mui/material/ListItemButton";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Friend } from "../types";

export default function FriendItem({ id, name }: Friend) {
  const { friendId } = useParams();

  const navigate = useNavigate();

  return (
    <ListItemButton
      selected={friendId === id}
      onClick={() => {
        navigate(`/friends/${id}`);
      }}
    >
      {name}
    </ListItemButton>
  );
}
