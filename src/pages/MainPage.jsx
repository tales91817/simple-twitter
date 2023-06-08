/* eslint-disable */ 
import React from 'react'
import Sidebar from 'components/MainPageFunctions/Sidebar';
import Twittes from 'components/MainPageFunctions/Twittes';
import Populars from 'components/MainPageFunctions/Populars';
import Profile from 'components/MainPageFunctions/Profile/Profile';
import OtherUserProfile from 'components/MainPageFunctions/OtherUserProfile/OtehrUserProfile'
import 'components/MainPageFunctions/mainPageStyles.scss'


const MainPage = () => {
    return (
        <div className="twitter">
          <Sidebar />
          {/* <Twittes /> */}
          {/* <Profile /> */}
          <OtherUserProfile />
          <Populars />
        </div>
      );
}

export default MainPage