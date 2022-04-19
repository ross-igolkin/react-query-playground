import { loadAuth0Config, Auth0Config } from './auth0';
import { loadBackendConfig, BackendConfig } from './backend';

export interface Config {
  auth0: Auth0Config;
  backend: BackendConfig;
}

export function useConfig(): Config {
  return {
    auth0: loadAuth0Config(),
    backend: loadBackendConfig(),
  };
}

export const MAX_INTEGER = 2000000000;
