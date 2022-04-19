import { useMemo, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LoggedInUser } from 'types';
import { useConfig } from 'config';
import { apiClient } from 'services/Client';
import useRetrieve from './useRetrieve';


export const useCurrentUser = () => {
  const [me, setMe] = useState<LoggedInUser | null>(null);

  const config = useConfig();
  const { baseUrl } = config.backend;

  const { getIdTokenClaims, isLoading, isAuthenticated, getAccessTokenSilently } = useAuth0();

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
    [getIdTokenClaims, getAccessTokenSilently],
  );

 useRetrieve<LoggedInUser>({path: "user/me", options:{
      enabled: isAuthenticated,
      onSuccess: (data)=>{
        console.log(data)
        setMe(data);
      }
  }});


  return {
    isAuthenticated,
    me,
    setMe,
    getIdToken,
    auth0UserLoading: isLoading,
  } as const;
};
