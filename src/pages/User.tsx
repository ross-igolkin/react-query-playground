import { useAuth0 } from "@auth0/auth0-react";
import { useGetFetchQuery } from "hooks";
import React from "react";
import { LoggedInUser } from "types";

export default function User() {
  const user = useGetFetchQuery("user/me") as LoggedInUser;
  const auth = useAuth0();

  console.log(auth);

  return (
    <div>
      User: {user?.firstName} {user?.lastName}
      Token:
    </div>
  );
}
