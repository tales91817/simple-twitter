import "./AuthStyles.scss";
import "./App.scss";
import MainPage from 'pages/MainPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminMainPage from "./pages/AdminMainPage";
import AdminUsersPage from "pages/AdminUsersPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/users/login" element={<LoginPage />} />
          <Route path="/users/signup" element={<SignUpPage />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/main" element={<AdminMainPage />} />
          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
