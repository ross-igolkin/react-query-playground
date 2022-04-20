import App from "App";
import { Auth0Provider } from "@auth0/auth0-react";
import { useConfig } from "config";
import { useNavigate } from "react-router-dom";

function ClientProvider() {
  // NB: Auth0 redirects won't work unless src/index.tsx wraps the app with a browser router
  const navigate = useNavigate();
  const config = useConfig();

  // Initialize the redirect location to the home page.
  const redirectUri = window.location.origin + "/";

  /* On login, change the page address to remove `code` and `state` query string parameters
   */
  function onRedirectCallback(appState?: { returnTo?: string }): void {
    const pathname =
      appState?.returnTo ??
      `${window.location.pathname}${window.location.hash}`;
    navigate(pathname);
  }

  return (
    <Auth0Provider
      domain={config.auth0.domain}
      clientId={config.auth0.clientId}
      redirectUri={redirectUri}
      onRedirectCallback={onRedirectCallback}
    >
      <App />
    </Auth0Provider>
  );
}

export default ClientProvider;
