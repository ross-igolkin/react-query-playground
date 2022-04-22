import Button from "@mui/material/Button";
import MuiAppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { useAuth0 } from "@auth0/auth0-react";

export default function AppBar() {
  const isFetching = useSelector(({ ui }: RootState) => ui.isFetching);

  const { logout } = useAuth0();

  return (
    <MuiAppBar position="sticky" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Capitola
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/submission/1">
            Submissions
          </Button>
          <Button color="inherit" component={RouterLink} to="/contact">
            Contacts
          </Button>
          <Button color="inherit" component={RouterLink} to="/user">
            User
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              logout({ returnTo: window.location.origin });
            }}
          >
            Logout
          </Button>
        </Stack>
      </Toolbar>
      {isFetching && <LinearProgress sx={{ position: "absolute", top: 0, left: 0, right: 0 }} />}
    </MuiAppBar>
  );
}
