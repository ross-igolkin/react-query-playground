import { IdToken, useAuth0 } from "@auth0/auth0-react";
import { LoggedInUser } from "types";
import { useConfig } from "config";
import { apiClient } from "services/Client";
import { useRetrieve } from "./useRetrieve";
import { useQuery } from "react-query";

export const useCurrentUser = () => {
  const config = useConfig();
  const { baseUrl } = config.backend;

  const { getIdTokenClaims, getAccessTokenSilently } = useAuth0();

  const { data: silentToken } = useQuery("silentToken", getAccessTokenSilently);

  const {data: idToken} = useQuery("idToken", () => getIdTokenClaims(), {
    enabled: !!silentToken,
    onSuccess: ({ __raw }: IdToken) => {
      apiClient.interceptors.request.use(
        (config) => {
          config.headers = {
            Authorization: `Bearer ${__raw}`,
          };
          config.baseURL = baseUrl + "/api/v1";
          return config;
        },
        (error) => {
          alert();
          return Promise.reject(error);
        }
      );
    },
  });

  useRetrieve<LoggedInUser>({
    path: "user/me",
    options: {
      enabled: !!idToken,
    },
  });
};
