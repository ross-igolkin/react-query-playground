export interface Auth0Config {
  clientId: string;
  domain: string;
}

export function loadAuth0Config(): Auth0Config {
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;

  if (clientId === undefined) {
    throw new Error('REACT_APP_AUTH0_CLIENT_ID environment variable must be defined');
  }

  if (domain === undefined) {
    throw new Error('REACT_APP_AUTH0_DOMAIN environment variable must be defined');
  }

  return {
    clientId,
    domain,
  };
}
