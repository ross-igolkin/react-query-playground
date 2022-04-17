import React from "react";
import { Friend } from "../types";

export default function FriendItem({ id, name }: Friend) {
  return (
    <div>
      {id} {name}
    </div>
  );
}
