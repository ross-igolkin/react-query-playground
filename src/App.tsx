import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Friends from "./pages/Submissions";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "components/AppBar";
import FriendDetails from "components/FriendDetails";

import { useCurrentUser } from "hooks/client/useCurrentUser";
import { useEffect } from "react";

function App() {
  const { getIdToken } = useCurrentUser();

  useEffect(() => {
    getIdToken();
  }, [getIdToken]);

  return (
    <>
      <CssBaseline />
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="submission" element={<Friends />}>
          <Route path=":submissionId" element={<FriendDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
