<<<<<<< HEAD
/* eslint-disable */ 
import React, { useEffect, useState } from 'react'
import Sidebar from 'components/MainPageFunctions/Sidebar/Sidebar';
import Twittes from 'components/MainPageFunctions/Twittes';
import Populars from 'components/MainPageFunctions/Populars/Populars';
import Profile from 'components/MainPageFunctions/Profile/Profile';
import OtherUserProfile from 'components/MainPageFunctions/OtherUserProfile/OtherUserProfile';
import 'components/MainPageFunctions/mainPageStyles.scss'
import { DummyTrenders } from 'components/dummyDocument/DummyTrenders';
import './page.scss'
import ReplyModal from 'components/MainPageFunctions/ReplyModal';
import Setting from 'components/MainPageFunctions/Setting/Setting';
import { Route, Router, Routes } from 'react-router-dom';
import ReplyList from 'components/MainPageFunctions/ReplyList/ReplyList';
import TwitterModal from 'components/MainPageFunctions/TwitterModal';
import EditProfileModal from 'components/MainPageFunctions/EditProfileModal';
<<<<<<< HEAD
import { getUserTweetInfo, getUserInfo, postTweet, getPopulars } from 'api/userInfo'
=======
import { getUserTweetInfo, getUserInfo, postTweet, getPopulars } from 'api/UserInfo'
>>>>>>> 3a53a9a (refactor Setting and change css styles of HomePage (not done yet))

=======
/* eslint-disable */
import React, { useEffect, useState } from "react";
import Sidebar from "components/MainPageFunctions/Sidebar/Sidebar";
import Twittes from "components/MainPageFunctions/Twittes";
import Populars from "components/MainPageFunctions/Populars/Populars";
import Profile from "components/MainPageFunctions/Profile/Profile";
import OtherUserProfile from "components/MainPageFunctions/OtherUserProfile/OtherUserProfile";
import "components/MainPageFunctions/mainPageStyles.scss";
import { DummyTrenders } from "components/dummyDocument/DummyTrenders";
import "./page.scss";
import ReplyModal from "components/MainPageFunctions/ReplyModal";
import Setting from "components/MainPageFunctions/Setting/Setting";
import { Route, Router, Routes, useNavigate } from "react-router-dom";
import ReplyList from "components/MainPageFunctions/ReplyList/ReplyList";
import TwitterModal from "components/MainPageFunctions/TwitterModal";
import EditProfileModal from "components/MainPageFunctions/EditProfileModal";
import {
  getUserTweetInfo,
  getUserInfo,
  postTweet,
  getPopulars,
} from "api/UserInfo";
import { useAuth } from "contexts/AuthContext";
>>>>>>> 76b3bbb (可以編輯並儲存個人設定 且有初步的錯誤提示  但重新整理會卡住 因為抓不到current id 原因查找中)


const HomePage = () => {
  const [ trendUsers, setTrenderUsers ] = useState([])
  const [ postCards, setPostCards ] = useState([])
  const [ openModalReply, setOpenModalReply ] = useState(false)
  const [ openModalTweet, setOpenMoadlTweet ] = useState(false)
  const [ openModelEdit, setOpenModelEdit ] = useState(false)
  const [ userInfo, setuserInfo ] = useState({})
  const [ inputValue, setInputValue ] = useState('')
  const [ tweets, setTweets ] = useState([])

  const [account, setAccount] = useState(dummyUserInfo.account);
  const [name, setUsername] = useState(dummyUserInfo.name);
  const [email, setEmail] = useState(dummyUserInfo.email);
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const navigate = useNavigate()

  // const { isAuthenticated } = useAuth()
  
  useEffect(() => {
    if(!isAuthenticated) {
      navigate("/users/login");
    }
  }, [navigate, isAuthenticated]);



  const handleClick = () => {
    const test = getPopulars();
    console.log(test);
  };

  useEffect(() => {
    const getUserTweetContentAsync = async () => {
      try {
        const tweetInfo = await getUserTweetInfo()
        setPostCards(tweetInfo.map((post) => ({...post})))
        } catch (error) {
        console.error (error);
      }
    }
    getTweetContentAsync()
  }, [])

  /* 取得使用者的資料 */
  useEffect(() => {
    const getUserInfoAsyn = async () => {
      try {
        const userInfo = await getUserInfo()
        setuserInfo(userInfo)
      } catch (error) {
        console.error(error);
      }
    }
    getUserInfoAsyn()
  }, [])

  useEffect(() => {
    const getPopularsAsyn = async () => {
      try {
        const popular = await getPopulars();
        setTrenderUsers(popular.map((people) => ({ ...people })));
      } catch (error) {
        console.error(error);
      }
    }
    getPopularsAsyn()
  }, [])

  const handleToggleFollow = (id, isFollowed) => {
    setTrenderUsers((prevUsers) => {
      return prevUsers.map((trend) => {
        if (trend.id === id) {
          return {
            ...trend,
            isFollowed: !isFollowed,
          }
        }
        return trend
      })
    })
  }

  const handleToggleLike = (id, isLiked) => {
    setPostCards((prevCards) => {
      return prevCards.map((card) => {
        if (card.id === id) {
          return {
            ...card,
            isLiked: !isLiked,
          }
        }
        return card
      })
    })
  }

  const handleOpenModalReply = (id) => {
    setOpenModalReply(true)
  }

  const handleCloseModalReply = () => {
    setOpenModalReply(false)
  }

  const handleOpenModalTweet = () => {
    setOpenMoadlTweet(true)
  }

  const handleCloseModalTweet = () => {
    setOpenMoadlTweet(false)
  }

  const handleOpenModalEdit = () => {
    setOpenModelEdit(true)
  }

  const handleCloseModalEdit = () => {
    setOpenModelEdit(false)
  }

  const handleChange = (value) => {
    setInputValue(value)
  }

  const handleAddTweet = async() => {
    if (inputValue.length === 0) {
      return
    }

    try {
      const { data } = await postTweet({
        description: inputValue,
      });

      setTweets((prevTweets) => {
        return [
          ...prevTweets,
          {
            id: data.id,
            description: data.description,
            updatedAt: data.updatedAt,
            createdAt: data.createdAt,
          },
        ]
      })
      console.log(data)
      console.log(tweets)
      setInputValue('');
    } catch(error) {
      console.error(error);
    }
  };
  ///////////////////////////////////
  const handleSaveConfig = () => {
    if (account.length === 0) {
      return;
    }
    if (name.length === 0) {
      return;
    }
    if (email.length === 0) {
      return;
    }
    if (password.length === 0) {
      return;
    }
    if (checkPassword.length === 0) {
      return;
    }

    // const {} =
  };
  //////////////////////////////////////
  return (
    <div className="container">
      <Sidebar onOpenModalTweet={handleOpenModalTweet} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Twittes
              tweets={tweets}
              onToggleLike={handleToggleLike}
              onOpenModalReply={handleOpenModalReply}
              onChange={handleChange}
              inputValue={inputValue}
              onAddTweet={handleAddTweet}
            />
          }
        />
        <Route
          exact
          path="/profile"
          element={
            <Profile
              onOpenEditModal={handleOpenModalEdit}
              postCards={postCards}
              userInfo={userInfo}
            />
          }
        />
        <Route
          exact
          path="/setting"
          element={
            <Setting
              onClick
              account={account}
              name={name}
              email={email}
              password={password}
              checkPassword={checkPassword}
              setAccount={setAccount}
              setUsername={setUsername}
              setEmail={setEmail}
              setPassword={setPassword}
              setCheckPassword={setCheckPassword}
            />
          }
        />
        <Route
          exact
          path="/other"
          element={
            <OtherUserProfile userInfo={userInfo} postCards={postCards} />
          }
        />
        <Route
          exact
          path="/replyList"
          element={<ReplyList onOpenModalReply={handleOpenModalReply} />}
        />
      </Routes>
      <Populars trendUsers={trendUsers} onTogglefollow={handleToggleFollow} />
      {openModalReply && <ReplyModal closeModal={handleCloseModalReply} />}
      {openModalTweet && <TwitterModal closeModal={handleCloseModalTweet} />}
      {openModelEdit && <EditProfileModal closeModal={handleCloseModalEdit} />}
      <button class="test" onClick={handleClick}>
        TEST
      </button>
    </div>
  );
};

<<<<<<< HEAD
  }
//////////////////////////////////////
    return (
<<<<<<< HEAD
        <div className="container">
            <Sidebar onOpenModalTweet={handleOpenModalTweet}/>
            <Routes>
<<<<<<< HEAD
              <Route exct path="*" element={<Twittes tweets={tweets} onToggleLike={handleToggleLike} onOpenModalReply={handleOpenModalReply} onChange={handleChange} inputValue={inputValue} onAddTweet={handleAddTweet} />} />
              <Route exct path="/profile" element={<Profile onOpenEditModal={handleOpenModalEdit} postCards={postCards} userInfo={userInfo}/>} />
              <Route exct path="/setting" element={<Setting />} />
              <Route exct path="/other" element={<OtherUserProfile userInfo={userInfo} postCards={postCards}/>} />
              <Route exct path="/replyList" element={<ReplyList onOpenModalReply={handleOpenModalReply}/>} />
=======
              <Route exact path="/" element={<Twittes tweets={tweets} onToggleLike={handleToggleLike} onOpenModalReply={handleOpenModalReply} onChange={handleChange} inputValue={inputValue} onAddTweet={handleAddTweet} />} />
              <Route exact path="/profile" element={<Profile onOpenEditModal={handleOpenModalEdit} postCards={postCards} userInfo={userInfo}/>} />
              <Route exact path="/setting" element={<Setting />} />
              <Route exact path="/other" element={<OtherUserProfile userInfo={userInfo} postCards={postCards}/>} />
              <Route exact path="/replyList" element={<ReplyList onOpenModalReply={handleOpenModalReply}/>} />
>>>>>>> 3a53a9a (refactor Setting and change css styles of HomePage (not done yet))
            </Routes>
            <Populars trendUsers={trendUsers} onTogglefollow={handleToggleFollow}/>
            { openModalReply && <ReplyModal closeModal={handleCloseModalReply}/> }
            { openModalTweet && <TwitterModal closeModal={handleCloseModalTweet}/> }
            { openModelEdit && <EditProfileModal closeModal={handleCloseModalEdit}/>}
            <button class="test" onClick={handleClick} >TEST</button>
        </div>
      );
=======
      <div className="container">
        <Sidebar onOpenModalTweet={handleOpenModalTweet} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Twittes
                tweets={tweets}
                onToggleLike={handleToggleLike}
                onOpenModalReply={handleOpenModalReply}
                onChange={handleChange}
                inputValue={inputValue}
                onAddTweet={handleAddTweet}
              />
            }
          />
          <Route
            exact
            path="/profile"
            element={
              <Profile
                onOpenEditModal={handleOpenModalEdit}
                postCards={postCards}
                userInfo={userInfo}
              />
            }
          />
          <Route
            exact
            path="/setting"
            element={
              <Setting
                onClick
                account={account}
                name={name}
                email={email}
                password={password}
                checkPassword={checkPassword}
                setAccount={setAccount}
                setUsername={setUsername}
                setEmail={setEmail}
                setPassword={setPassword}
                setCheckPassword={setCheckPassword}
              />
            }
          />
          <Route
            exact
            path="/other"
            element={
              <OtherUserProfile userInfo={userInfo} postCards={postCards} />
            }
          />
          <Route
            exact
            path="/replyList"
            element={<ReplyList onOpenModalReply={handleOpenModalReply} />}
          />
        </Routes>
        <Populars trendUsers={trendUsers} onTogglefollow={handleToggleFollow} />
        {openModalReply && <ReplyModal closeModal={handleCloseModalReply} />}
        {openModalTweet && <TwitterModal closeModal={handleCloseModalTweet} />}
        {openModelEdit && (
          <EditProfileModal closeModal={handleCloseModalEdit} />
        )}
        <button class="test" onClick={handleClick}>
          TEST
        </button>
      </div>
    );
>>>>>>> be0163c (add useAuth in pages and downgrade react script version to 4.0.3)
}
=======
export default HomePage;
>>>>>>> 76b3bbb (可以編輯並儲存個人設定 且有初步的錯誤提示  但重新整理會卡住 因為抓不到current id 原因查找中)
