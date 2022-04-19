export interface BackendConfig {
  baseUrl: string;
  jsonServerBaseUrl: string | undefined;
}

export function loadBackendConfig(): BackendConfig {
  const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL;
  const jsonServerBaseUrl = process.env.REACT_APP_JSON_SERVER_BASE_URL;

  if (baseUrl === undefined) {
    throw new Error('REACT_APP_BACKEND_BASE_URL environment variable must be defined');
  }

  return {
    baseUrl,
    jsonServerBaseUrl,
  };
}
