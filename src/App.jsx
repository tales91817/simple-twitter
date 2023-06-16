import "./AuthStyles.scss";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminMainPage from "./pages/AdminMainPage";
import AdminUsersPage from "pages/AdminUsersPage";
import HomePage from "pages/HomePage";

const basename = process.env.PUBLIC_URL;

const App = () => {
  return (
    <div className="App" basename={basename}>
      <BrowserRouter>
        <Routes>
          <Route path="users/login" element={<LoginPage />} />
          <Route path="users/signup" element={<SignUpPage />} />
          <Route path="admin/login" element={<AdminLoginPage />} />
          <Route path="admin/main" element={<AdminMainPage />} />
          <Route path="admin/users" element={<AdminUsersPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
