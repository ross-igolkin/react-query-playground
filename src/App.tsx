import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "components/AppBar";
import AdapterMoment from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { ReactQueryDevtools } from "react-query/devtools";
import { useCurrentUser } from "hooks/client/useCurrentUser";
import Router from "Router";
import theme from "themes";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

function App() {
  useCurrentUser();
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <CssBaseline />
        <AppBar />
        <Router />
        <ReactQueryDevtools initialIsOpen />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
