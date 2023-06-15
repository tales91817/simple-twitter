import React, { useEffect, useState } from 'react'
import Sidebar from 'components/MainPageFunctions/Sidebar/Sidebar';
import Twittes from 'components/MainPageFunctions/Twittes';
import Populars from 'components/MainPageFunctions/Populars/Populars';
import Profile from 'components/MainPageFunctions/Profile/Profile';
import OtherUserProfile from 'components/MainPageFunctions/OtherUserProfile/OtherUserProfile';
import 'components/MainPageFunctions/mainPageStyles.scss'
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



const HomePage = () => {
  /* Main */
  const [ allTweet, setAllTweet ] = useState([])
  const [ trendUsers, setTrenderUsers ] = useState([])
  const [ postCards, setPostCards ] = useState([])
  const [ inputValue, setInputValue ] = useState('')
  const [ currentId, setCurrentId ] = useState(localStorage.getItem("id"));

  /* Main & ReplyList */
  const [ openModalReply, setOpenModalReply ] = useState(false)
  const [ openModalTweet, setOpenMoadlTweet ] = useState(false)
  const [ openModelEdit, setOpenModelEdit ] = useState(false)
  const [ replyPostInfo, setRelyPostInfo ] = useState({})
  const [ replyId, setReplyId ] = useState("")
  const [ allReplies, setAllReplies ] = useState([])
  const [ currentTweet, setCurrentTweet ] = useState({})
  const [ addReply, setAddReply ] = useState({})

  /* UserProfile */
  const [ userInfo, setuserInfo ] = useState({})
  const [ userId, setUserId] = useState(currentId)
  const [ tweets, setTweets ] = useState([])
  const [ likes, setLikes ] = useState([])
  const [ inputNameValue, setInputNameValue ] = useState('')
  const [ inputIntroValue, setInputIntroValue ] = useState('')
  const [ followers, setFollowers ] = useState([])
  const [ followings, setFollowings ] = useState([])
  const [ image, setImage ] = useState(null)

  /* Tweet */
  const [ checkWordLength, setCheckWordLength ] = useState(false)
  const [ checkInputIsSpace, setCheckInputIsSpace ] = useState(false)
  const [ disabledButton, setDisabledButton ] = useState(false)


  const handleClick = () => {
    const test = getPopulars()
    console.log(test)
  }

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

  /* 取得使用者的資料 */
  useEffect(() => {
    const getUserInfoAsyn = async () => {
      try {
        const info = await getUserInfo(currentId)
        setuserInfo(info)
      } catch (error) {
        console.error (error);
      }
    }
    getUserInfoAsyn()
  }, [currentId])
  

  useEffect(() => {
    const getPopularsAsyn = async () => {
      try {
        const popular = await getPopulars()
        setTrenderUsers(popular.map((people) => ({...people})))
      } catch (error) {
        console.error (error);
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

  /* 儲存個人資料 */
  const handleOnSave = (id) => {
    const payload = {
      username: inputNameValue,
      userIntroduction: inputIntroValue
    }
    setOpenModelEdit(false)
    putUserProfileInfo(id, payload)
    const getUserInfoAsyn = async () => {
      try {
        const info = await getUserInfo(id)
        setuserInfo(info)
      } catch (error) {
        console.error (error);
      }
    }
    getUserInfoAsyn()
  }


  /* 按讚功能 & 取消讚功能 */
  const handleToggleLike = (id, isLiked) => {
    if (isLiked === true) {
      cancelLikes(id)
      const getAllTweetContentAsync = () => {
        try {
          const allTweet = getAllTweetPost()
          setAllTweet(allTweet.map((post) => ({...post})))
          } catch (error) {
          console.error (error);
        }
      }
      getAllTweetContentAsync()
      setCurrentClickLike(id)
    } else if (isLiked === false) {
      addLikes(id)
      const getAllTweetContentAsync = () => {
        try {
          const allTweet = getAllTweetPost()
          setAllTweet(allTweet.map((post) => ({...post})))
          } catch (error) {
          console.error (error);
        }
      }
      getAllTweetContentAsync()
      setCurrentClickLike(id)
    }
  }

  /* 新增推文 */
  const handleAddTweet = async() => {
    if (inputValue.length === 0 || inputValue.trim() === '') {
      return
    }

    try {
      const {data} = await postTweet({
        description: inputValue
      })

      setTweets((prevTweets) => {
        return [
            ...prevTweets,
          {
            id: data.id,
            description: data.description,
            updatedAt: data.updatedAt,
            createdAt: data.createdAt
          },
        ]
      })
      setInputValue('');
    } catch(error) {
      console.error(error);
    }
  }

    return (
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
}

export default HomePage