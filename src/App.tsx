import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Friends from "./pages/Friends";
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
        <Route path="friends" element={<Friends />}>
          <Route path=":friendId" element={<FriendDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
