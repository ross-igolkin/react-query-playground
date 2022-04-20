import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SubmissionPage from "./pages/SubmissionPage";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "components/AppBar";
import SubmissionDetails from "components/SubmissionDetails";
import { ReactQueryDevtools } from "react-query/devtools";

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
        <Route path="submission" element={<SubmissionPage />}>
          <Route path=":submissionId" element={<SubmissionDetails />} />
        </Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen />
    </>
  );
}

export default App;
