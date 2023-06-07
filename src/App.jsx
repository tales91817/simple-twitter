import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AdminLoginPage from "./pages/AdminLoginPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/users/login" element={<LoginPage />} />
          <Route path="/users/signup" element={<SignUpPage />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          {/* <Route path="*" element={<HomePage />} />      後面會用到，所以先留著*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
