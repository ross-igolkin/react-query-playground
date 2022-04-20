import { IdToken, useAuth0 } from "@auth0/auth0-react";
import { useGetQueryData } from "hooks";
import React from "react";
import { LoggedInUser } from "types";

export default function User() {
  const user = useGetQueryData<LoggedInUser>("user/me");
  const idToken = useGetQueryData<IdToken>("idToken");

  const { isLoading } = useAuth0();

  return (
    <div>
      User: {user?.firstName} {user?.lastName}
      <br />
      Token: {idToken?.__raw}
      <br />
      Auth0 isLoading: {isLoading.toString()}
    </div>
  );
}
