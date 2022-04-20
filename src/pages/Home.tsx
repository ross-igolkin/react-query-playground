import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

export default function Home() {
  const { user, isLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isLoading && !user) loginWithRedirect();
  }, [isLoading, user, loginWithRedirect]);

  return <div>Home</div>;
}
