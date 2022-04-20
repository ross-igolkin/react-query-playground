import { IdToken, useAuth0 } from "@auth0/auth0-react";
import { useGetFetchQuery } from "hooks";
import React from "react";
import { LoggedInUser } from "types";

export default function User() {
  const user = useGetFetchQuery("user/me") as LoggedInUser;
  const { __raw } = useGetFetchQuery("idToken") as IdToken;

  const { isLoading } = useAuth0();

  console.log(__raw);

  return (
    <div>
      User: {user?.firstName} {user?.lastName}
      <br />
      Token: {__raw}
      <br />
      Auth0 isLoading: {isLoading.toString()}
    </div>
  );
}
