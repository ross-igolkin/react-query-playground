import Button from "@mui/material/Button";
import MuiAppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import { useQueryClient } from "react-query";
import { useEffect } from "react";

export default function AppBar() {
  const res = useQueryClient();

  useEffect(() => {
    console.log(res);
  }, [res]);

  console.log(res);
  return (
    <MuiAppBar position="sticky" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Friends
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/friends">
            Friends
          </Button>
        </Stack>
      </Toolbar>
      <LinearProgress variant="determinate" value={90} />
    </MuiAppBar>
  );
}
