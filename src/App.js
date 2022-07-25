import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UsersProvider } from "./contexts/useUsers";
import { Users } from "./views";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <UsersProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users title="Choose your profile" />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </UsersProvider>
  );
}

export default App;
