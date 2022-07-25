import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Comments, Users, NotFound } from "./views";
import { UsersProvider } from "./contexts/useUsers";
import { CommentsProvider } from "./contexts/useComments";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <UsersProvider>
      <CommentsProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Users title="Choose your profile" />} />
            <Route path="/comments" element={<Comments title="Discussion" />} />
            <Route path="*" element={<NotFound title="Page Not Found" />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </CommentsProvider>
    </UsersProvider>
  );
}

export default App;
