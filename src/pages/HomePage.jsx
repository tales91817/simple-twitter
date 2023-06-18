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
  const [ tweets, setTweets ] = useState([])
  const [ likes, setLikes ] = useState([])
  const [ inputNameValue, setInputNameValue ] = useState('')
  const [ inputIntroValue, setInputIntroValue ] = useState('')
  const [ followers, setFollowers ] = useState([])
  const [ followings, setFollowings ] = useState([])

  /* Tweet */
  const [ checkWordLength, setCheckWordLength ] = useState(false)
  const [ checkInputIsSpace, setCheckInputIsSpace ] = useState(false)
  const [ disabledButton, setDisabledButton ] = useState(false)

  /* Likes */
  const [ currentClickLike, setCurrentClickLike] = useState('')


  const handleClick = () => {
    const test = getFollower(24)
    console.log(test)
  }

  /* 取得所有推文(主畫面) */
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

  useEffect(() => {
    const getUserTweetContentAsync = async () => {
      try {
        const tweetInfo = await getUserTweetInfo(userId)
        setPostCards(tweetInfo.map((post) => ({...post})))
        } catch (error) {
        console.error (error);
      }
    }
    getUserTweetContentAsync()
  }, [userId])

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
  
  /* 取得使用者的所有推文 */
  useEffect(() => {
    const getUserTweetContentAsync = async () => {
      try {
        const tweetInfo = await getUserTweetInfo(currentId)
        setPostCards(tweetInfo.map((post) => ({...post})))
        } catch (error) {
        console.error (error);
      }
    }
    getUserTweetContentAsync()
  }, [currentId])

  /* 取得使用者的所有回覆 */

  useEffect(() => {
    const getAllRepliesAsyn = async () => {
      try {
        const replies = await getAllReplies(currentId)
        setAllReplies(replies.map((post) => ({...post})))
      } catch (error) {
        console.error (error);
      }
    }
    getAllRepliesAsyn()
  }, [currentId, addReply])

  /* 取得使用者的所有喜歡 */
  useEffect(() =>{
    const getUserLikesAsync = async () => {
      try {
        const allLikes = await getUserLikesInfo(currentId) 
        setLikes(allLikes.map((like) => ({...like})))
        } catch (error) {
        console.error (error);
      }
    }
    getUserLikesAsync()
  }, [currentId])

  /* 取得跟隨者 */
  useEffect(() => {
    const getFollowerAsync = async () => {
      try {
        const info = await getFollowing(currentId)
        setFollowings(info)
      } catch (error) {
        console.error (error);
      }
    }
    getFollowerAsync()
  }, [currentId])

  useEffect(() => {
    const getFollowingAsync = async () => {
      try {
        const info = await getFollower(currentId)
        setFollowers(info)
      } catch (error) {
        console.error (error);
      }
    }
    getFollowingAsync()
  }, [currentId])


  /*點擊後顯示該個人簡介 */
  const handleClickedId = (id) => {
    const getUserInfoAsyn = async () => {
      try {
        const info = await getUserInfo(id)
        setuserInfo(info)
      } catch (error) {
        console.error (error);
      }
    }
    getUserInfoAsyn()

    const getUserTweetContentAsync = async () => {
      try {
        const tweetInfo = await getUserReplies(id)
        setPostCards(tweetInfo.map((post) => ({...post})))
        } catch (error) {
        console.error (error);
      }
    }
    getUserTweetContentAsync()

    const getUserLikesAsync = async () => {
      try {
        const allLikes = await getUserLikesInfo(id) 
        setLikes(allLikes.map((like) => ({...like})))
        } catch (error) {
        console.error (error);
      }
    }
    getUserLikesAsync()

    const getAllRepliesAsyn = async () => {
      try {
        const replies = await getAllReplies(id)
        setAllReplies(replies.map((post) => ({...post})))
      } catch (error) {
        console.error (error);
      }
    }
    getAllRepliesAsyn()
  }

  /* 修改個人簡介 */
  const handleChangeName = (value) => {
    setInputNameValue(value)
  }

  const handleChangeIntro = (value) => {
    setInputIntroValue(value)
  }

  const handleChangeImg = () => {
    
  }
  /* 儲存個人資料 */
  const handleOnSave = () => {
    const payload = {
      username: inputNameValue,
      userIntroduction: inputIntroValue
    }
    setOpenModelEdit(false)
    putUserProfileInfo(currentId, payload)
    const getUserInfoAsyn = async () => {
      try {
        const info = await getUserInfo(currentId)
        setuserInfo(info)
      } catch (error) {
        console.error (error);
      }
    }
    getUserInfoAsyn()
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

    if(value.length >= 140) {
      setCheckWordLength(true)
      setDisabledButton(true)
    } else if(value.length <= 140) {
      setCheckWordLength(false)
      setDisabledButton(false)
    }

    if(value.length === 0 || value.trim() === '') {
      setDisabledButton(true)
      setCheckInputIsSpace(true)
    } else if(value.length !== 0 || value.trim() !== '') {
      setDisabledButton(false)
      setCheckInputIsSpace(false)
    }
  }

  /* 取消預設送出 */
  const handleSubmit = (e) => {
    e.preventDefault();
  }


  /* 從主畫面的推特文進入回覆清單的回覆內容 */
  const handleChangeReply = async(id) => {
    setReplyId(id)
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
  const handleSaveConfig = async() => {
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
    console.log("現在的id是", currentId);
    let id = currentId
    console.log(`currenId是${currentId}, id是${id}`);
    const data = await patchConfig({
      id,
      name,
      account,
      email,
      password,
      checkPassword,
    });
    console.log('按到了')
    console.log(data)
    setAlertText(data.message)
    console.log(alertText)
    // if (data.message) {console.log(data.message)};
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
            <Populars trendUsers={trendUsers} />
            { openModalReply && <ReplyModal closeModal={handleCloseModalReply} replyPostInfo={replyPostInfo} onChange={handleChange} onAddReply={handleAddReply} /> }
            { openModalTweet && <TwitterModal closeModal={handleCloseModalTweet} onChange={handleChange} inputValue={inputValue} onAddTweet={handleAddTweet} checkWordLength={checkWordLength} onSubmit={handleSubmit} disabledButton={disabledButton} checkInputIsSpace={checkInputIsSpace}/> }
            { openModelEdit && <EditProfileModal closeModal={handleCloseModalEdit} onChangeName={handleChangeName} onChangeIntro={handleChangeIntro} onSave={handleOnSave} onChangeImg={handleChangeImg}/>}
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
