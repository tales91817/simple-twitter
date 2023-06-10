import './App.scss'
import HomePage from 'pages/HomePage';
import ProfilePage from 'pages/ProfilePage';
import SettingPage from 'pages/SettingPage';
import OtherUserPage from 'pages/OtherUserPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/other" element={<OtherUserPage />} />
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
