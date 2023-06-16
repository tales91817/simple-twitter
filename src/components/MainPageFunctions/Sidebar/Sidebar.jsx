import React, { useState } from 'react'
import { ReactComponent as LOGO } from 'assets/icons/LOGO.svg'
import { ReactComponent as HomeIcon } from 'assets/icons/home.svg'
import { ReactComponent as HomeIconSelected } from 'assets/icons/home_selected.svg'
import { ReactComponent as ProfileIcon } from 'assets/icons/profile.svg'
import { ReactComponent as ProfileIconSelected } from 'assets/icons/profile_selected.svg'
import { ReactComponent as SettingIcon } from 'assets/icons/setting.svg'
import { ReactComponent as SettingIconSelected } from 'assets/icons/setting_selected.svg'
import { ReactComponent as LogoutIcon } from 'assets/icons/Logout.svg'
import { useNavigate } from 'react-router-dom'
import './sidebar.scss'


/* eslint-disable */ 

const Sidebar = ({ onOpenModalTweet }) => {
    const [ isSelectedIcon, setIsSelectedIcon ] = useState('')
    const handleButtonClick = (buttonName) => {
        setIsSelectedIcon(buttonName)
    }
    const navigate = useNavigate()
    const handleClick = () => {
      localStorage.removeItem("authToken");
      navigate("/users/login");
    };

  return (
    <div className="sidebar">
      <div className="btn-wrapper">
        <div className="logo">
          <a href="#">
            <LOGO className="icons" />
          </a>
        </div>
        <div
          className={isSelectedIcon === "home" ? "selected" : "item"}
          onClick={() => {
            handleButtonClick("home");
            navigate("/simple-twitter");
          }}
        >
          {isSelectedIcon === "home" ? (
            <HomeIconSelected className="icons" />
          ) : (
            <HomeIcon className="icons" />
          )}
          <div className="text">首頁</div>
        </div>
        <div
          className={isSelectedIcon === "profile" ? "selected" : "item"}
          onClick={() => {
            handleButtonClick("profile");
            navigate("/profile");
          }}
        >
          {isSelectedIcon === "profile" ? (
            <ProfileIconSelected className="icons" />
          ) : (
            <ProfileIcon className="icons" />
          )}
          <div className="text">個人資料</div>
        </div>
        <div
          className={isSelectedIcon === "setting" ? "selected" : "item"}
          onClick={() => {
            handleButtonClick("setting");
            navigate("/setting");
          }}
        >
          {isSelectedIcon === "setting" ? (
            <SettingIconSelected className="icons" />
          ) : (
            <SettingIcon className="icons" />
          )}
          <div className="text">設定</div>
        </div>
        <div className="sidebar_Btn" onClick={() => {
                onOpenModalTweet()
        }}>
          <a href="#">推文</a>
        </div>
      </div>
      <div onClick={handleClick} className="logout">
        <div className="logoutBtn">
          <LogoutIcon />
          <div className="logoutText">登出</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar