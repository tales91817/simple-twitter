import "./AuthStyles.scss";
import "./App.scss";
import MainPage from 'pages/MainPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminMainPage from "./pages/AdminMainPage";
import AdminUsersPage from "pages/AdminUsersPage";
import HomePage from 'pages/HomePage';
import ProfilePage from 'pages/ProfilePage';
import SettingPage from 'pages/SettingPage';
import OtherUserPage from 'pages/OtherUserPage';

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
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/other" element={<OtherUserPage />} />
          {/* <Route path="*" element={<HomePage />} />      後面會用到，所以先留著*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
