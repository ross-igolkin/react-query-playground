import { Routes, Route } from "react-router-dom";
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
export default function Router() {
  const me = useGetQueryData<LoggedInUser>("user/me");

  return me ? (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/submission/:paginationNumber" element={<SubmissionPage />}>
        <Route path=":submissionId" element={<SubmissionDetails />} />
      </Route>
      <Route path="/contact" element={<ContactPage />} />

      <Route path="/contact/:contactId" element={<ContactDetails />} />
      <Route path="/user" element={<User />} />
    </Routes>
  ) : (
    <Box height={1} width={1} display="flex" justifyContent="center" alignItems="center">
      <CircularProgress />
    </Box>
  );
}
