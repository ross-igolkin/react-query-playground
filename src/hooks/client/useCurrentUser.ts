import { IdToken, useAuth0 } from "@auth0/auth0-react";
import { LoggedInUser } from "types";
import { useConfig } from "config";
import { apiClient } from "services/Client";
import { useRetrieve } from "./useRetrieve";
import { useQuery } from "react-query";
import { useState } from "react";

export const useCurrentUser = () => {
  const config = useConfig();
  const { baseUrl } = config.backend;

  const [token, setToken] = useState<IdToken>();

  const { getIdTokenClaims, getAccessTokenSilently } = useAuth0();

  const { data: silentToken } = useQuery("silentToken", getAccessTokenSilently);

  const { data: idToken } = useQuery("idToken", () => getIdTokenClaims(), {
    enabled: !!silentToken,
    onSuccess: (data) => {
      setToken(data);
    },
  });

  const { data: axiosConfig } = useQuery(
    "axiosConfig",
    () =>
      apiClient.interceptors.request.use((config) => {
        config.headers = {
          Authorization: `Bearer ${idToken?.__raw}`,
        };
        config.baseURL = baseUrl + "/api/v1";
        return config;
      }),
    {
      enabled: !!token,
    }
  );

  useRetrieve<LoggedInUser>({
    path: "user/me",
    options: {
      enabled: axiosConfig !== undefined,
    },
  });
};
