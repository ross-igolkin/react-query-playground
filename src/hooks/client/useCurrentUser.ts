import { useMemo } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LoggedInUser } from 'types';
import { useConfig } from 'config';
import { apiClient } from 'services/Client';
import { useRetrieve } from './useRetrieve';


export const useCurrentUser = () => {

  const config = useConfig();
  const { baseUrl } = config.backend;

  const { getIdTokenClaims, isAuthenticated, getAccessTokenSilently } = useAuth0();


  

  const getIdToken = useMemo(
    () => async () => {
      // Make sure the access token is refreshed
      await getAccessTokenSilently();

      // Get the refreshed id token, that also contains the user email, needed by the server
      const { __raw: idToken } = await getIdTokenClaims() as {__raw:string};

      apiClient.interceptors.request.use(
        (config) => {
          config.headers = {
            Authorization:"Bearer " + idToken,
          };
          config.baseURL = baseUrl + "/api/v1";
          return config;
        },
        (error) => {
          alert();
          return Promise.reject(error);
        }
      );

      return idToken;
    },
    [getIdTokenClaims, getAccessTokenSilently, baseUrl],
  );

 useRetrieve<LoggedInUser>({path: "user/me", options:{
      enabled: isAuthenticated,
  }});


  return {
    getIdToken,
  } as const;
};
