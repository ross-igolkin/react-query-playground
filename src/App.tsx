import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Friends from "./pages/Friends";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "components/AppBar";
import FriendDetails from "components/FriendDetails";

function App() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="friends" element={<Friends />}>
            <Route path=":friendId" element={<FriendDetails />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
