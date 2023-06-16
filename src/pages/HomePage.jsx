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
import { Route, Routes } from 'react-router-dom';
import ReplyList from 'components/MainPageFunctions/ReplyList/ReplyList';
import TwitterModal from 'components/MainPageFunctions/TwitterModal';
import EditProfileModal from 'components/MainPageFunctions/EditProfileModal';
import FollowInfo from 'components/MainPageFunctions/Follower/FollowInfo';
import { getUserTweetInfo, getUserInfo, getPopulars, getUserLikesInfo, putUserProfileInfo, getUserReplies } from 'api/UserInfo'
import { getAllTweetPost, postTweet } from 'api/tweetInfo';
import { getAllReplies, replyToTweet } from 'api/reply';
import { addLikes, cancelLikes } from 'api/like';
import { deleteFollower, postFollower, getFollower, getFollowing } from 'api/follow';

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

  useEffect(() => {
    const getAllTweetContentAsync = async () => {
      try {
        const allTweet = await getAllTweetPost()
        setAllTweet(allTweet.map((post) => ({...post})))
        } catch (error) {
        console.error (error);
      }
    }
    getAllTweetContentAsync()
  }, [currentClickLike])

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
      setOpenMoadlTweet(false)
      /* 推文發出後重新get推文列 */
      const getAllTweetContentAsync = async () => {
        try {
          const allTweet = await getAllTweetPost()
          setAllTweet(allTweet.map((post) => ({...post})))
          } catch (error) {
          console.error (error);
        }
      }
      getAllTweetContentAsync()

      /* 推文發出後重新get使用者的發文列表 */
      const getUserTweetContentAsync = async () => {
        try {
            const tweetInfo = await getUserTweetInfo()
            setPostCards(tweetInfo.map((post) => ({...post})))
            } catch (error) {
            console.error (error);
          }
        }
          getUserTweetContentAsync()
      } catch(error) {
        console.error(error);
      }
    }

    /* 在推文新增回覆 */
    const handleAddReply = async (id) => {
      if (inputValue.length === 0 || inputValue.trim() === '') {
        return
      }
  
      try {
        const data = await replyToTweet(inputValue, id)
        setAddReply({
          comment: data.comment
        })
        /* 輸入框淨空 & 關閉視窗 */
        setInputValue('');
        setOpenModalReply(false)

        /* 推文發出後重新get回覆列表 */
        const getAllTweetContentAsync = async () => {
          try {
            const allTweet = await getAllTweetPost()
            setAllTweet(allTweet.map((post) => ({...post})))
            } catch (error) {
            console.error (error);
          }
        }
        getAllTweetContentAsync()

      } catch(error) {
        console.log(error)
      }
    }

  const handleOpenModalReply = (id, avatar, name, account, createdAt, description) => {
    setOpenModalReply(true)
    setRelyPostInfo({
      id: id,
      avatar: avatar,
      name: name,
      account: account,
      createdAt: createdAt,
      description: description
    })
  }

  const handleCloseModalReply = () => {
    setOpenModalReply(false)
    setInputValue('');
  }

  const handleOpenModalTweet = () => {
    setOpenMoadlTweet(true)
  }

  const handleCloseModalTweet = () => {
    setOpenMoadlTweet(false)
    setInputValue('');
  }

  const handleOpenModalEdit = () => {
    setOpenModelEdit(true)
  }

  const handleCloseModalEdit = () => {
    setOpenModelEdit(false)
    setInputValue('');
  }

  /* 輸入框限制文字內容 */
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
      const Replies = await getAllReplies(id)
      setAllReplies(Replies)
    } catch (error) {
      console.log(error)
    }

    const currentTweet = allTweet.find((tweet) => tweet.id === id)
    setCurrentTweet(currentTweet)
  }

  

  /* 跟隨 & 取消跟隨 */
  const handleClickFollow = (id, isFollowed) => {
    if(isFollowed === true) {
      deleteFollower(id)
      const getUserInfoAsyn = async () => {
        try {
          const info = await getUserInfo(id)
          setuserInfo(info)
        } catch (error) {
          console.error (error);
        }
      }
      getUserInfoAsyn()
    } else if (isFollowed === false) {
      postFollower(id)
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
  }

    return (
        <div className="container">
            <Sidebar onOpenModalTweet={handleOpenModalTweet}/>
            <HashRouter>
            <Routes>
              <Route exact path="/main" element={<Twittes tweets={tweets} onToggleLike={handleToggleLike} onOpenModalReply={handleOpenModalReply} onChange={handleChange} inputValue={inputValue} onAddTweet={handleAddTweet} />} />
              <Route exact path="/profile" element={<Profile onOpenEditModal={handleOpenModalEdit} postCards={postCards} userInfo={userInfo}/>} />
              <Route exact path="/setting" element={<Setting />} />
              <Route exact path="/other" element={<OtherUserProfile userInfo={userInfo} postCards={postCards}/>} />
              <Route exact path="/replyList" element={<ReplyList onOpenModalReply={handleOpenModalReply}/>} />
            </Routes>
            </HashRouter>
            <Populars trendUsers={trendUsers} onTogglefollow={handleToggleFollow}/>
            { openModalReply && <ReplyModal closeModal={handleCloseModalReply}/> }
            { openModalTweet && <TwitterModal closeModal={handleCloseModalTweet}/> }
            { openModelEdit && <EditProfileModal closeModal={handleCloseModalEdit}/>}
        </div>
      );
}

export default HomePage