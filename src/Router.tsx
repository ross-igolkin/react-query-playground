import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SubmissionPage from "./pages/SubmissionPage";
import SubmissionDetails from "components/SubmissionDetails";
import Contact from "pages/Contact";
import User from "pages/User";
import { useGetFetchQuery } from "hooks";
import { LoggedInUser } from "types";
export default function Router() {
  const me = useGetFetchQuery("user/me") as LoggedInUser;

  return me ? (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/submission" element={<SubmissionPage />}>
        <Route path=":submissionId" element={<SubmissionDetails />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
      <Route path="/user" element={<User />} />
    </Routes>
  ) : null;
}
