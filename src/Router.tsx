import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import SubmissionPage from "./pages/SubmissionPage";
import SubmissionDetails from "components/SubmissionDetails";
import ContactPage from "pages/ContactPage";
import User from "pages/User";
import { useGetQueryData } from "hooks";
import { LoggedInUser } from "types";
import { CircularProgress } from "@mui/material";
import Box from "@mui/material/node_modules/@mui/system/Box";
import ContactDetails from "components/ContactDetails";
import ContactFormDialog from "components/ContactFormDialog";
import AppBar from "components/AppBar";
import NoMatch from "pages/NoMatch";
export default function Router() {
  const me = useGetQueryData<LoggedInUser>("user/me");

  const location = useLocation();

  console.log(location);

  const state = location.state as { backgroundLocation?: Location };

  return me ? (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route path="/submission/:paginationNumber" element={<SubmissionPage />}>
            <Route path=":submissionId" element={<SubmissionDetails />} />
          </Route>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact/:contactId" element={<ContactDetails />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      {/* Show the modal when a `backgroundLocation` is set */}
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/contact/:contactId/edit" element={<ContactFormDialog />} />
        </Routes>
      )}
    </>
  ) : (
    <Box height={1} width={1} display="flex" justifyContent="center" alignItems="center">
      <CircularProgress />
    </Box>
  );
}
