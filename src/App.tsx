import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "components/AppBar";

import { ReactQueryDevtools } from "react-query/devtools";
import { useCurrentUser } from "hooks/client/useCurrentUser";
import Router from "Router";

function App() {
  useCurrentUser();
  return (
    <>
      <CssBaseline />
      <AppBar />
      <Router />
      <ReactQueryDevtools initialIsOpen />
    </>
  );
}

export default App;
