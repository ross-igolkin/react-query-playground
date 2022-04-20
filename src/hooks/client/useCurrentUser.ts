import { useAuth0 } from "@auth0/auth0-react";
import { LoggedInUser } from "types";
import { useConfig } from "config";
import { apiClient } from "services/Client";
import { useRetrieve } from "./useRetrieve";
import { useQuery } from "react-query";

export const useCurrentUser = () => {
  const config = useConfig();
  const { baseUrl } = config.backend;

  const { getIdTokenClaims, isAuthenticated, getAccessTokenSilently, loginWithRedirect } = useAuth0();

  const { data: silentToken } = useQuery("silentToken", getAccessTokenSilently, {
    enabled: !isAuthenticated,
    retry: false,
    onError: () => {
      loginWithRedirect();
    },
  });

  const { data: idToken } = useQuery("idToken", () => getIdTokenClaims(), {
    enabled: !!silentToken,
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
      enabled: !!idToken,
    }
  );

  useRetrieve<LoggedInUser>({
    path: "user/me",
    options: {
      enabled: axiosConfig !== undefined,
    },
  });
};
