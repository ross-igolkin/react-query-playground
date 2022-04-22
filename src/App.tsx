import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "components/AppBar";
import AdapterMoment from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { ReactQueryDevtools } from "react-query/devtools";
import { useCurrentUser } from "hooks/client/useCurrentUser";
import Router from "Router";
import theme from "themes";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

function App() {
  useCurrentUser();
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <CssBaseline />
        <Stack height="100vh">
          <Router />
        </Stack>
        <ReactQueryDevtools initialIsOpen position="bottom-right" />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
