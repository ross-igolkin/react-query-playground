import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <Button component={Link} to="/">
      Go to the home page
    </Button>
  );
}
