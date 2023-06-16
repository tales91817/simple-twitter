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
import { getUserTweetInfo, getUserInfo, getPopulars, getUserLikesInfo } from 'api/userInfo'
import { getAllTweetPost, postTweet } from 'api/tweetInfo';
import { getAllReplies, replyToTweet } from 'api/reply';
import { getUserTweetInfo, getUserInfo, postTweet, getPopulars } from 'api/userInfo'


const HomePage = () => {
  /* Main */
  const [ allTweet, setAllTweet ] = useState([])
  const [ trendUsers, setTrenderUsers ] = useState([])
  const [ postCards, setPostCards ] = useState([])
  const [ inputValue, setInputValue ] = useState('')

  /* Main & ReplyList */
  const [ openModalReply, setOpenModalReply ] = useState(false)
  const [ openModalTweet, setOpenMoadlTweet ] = useState(false)
  const [ openModelEdit, setOpenModelEdit ] = useState(false)
  const [ replyPostInfo, setRelyPostInfo ] = useState({})
  const [ replyId, setReplyId ] = useState(14)
  const [ allReplies, setAllReplies ] = useState([])
  const [ currentTweet, setCurrentTweet ] = useState({})
  const [ addReply, setAddReply ] = useState({})

  /* UserProfile */
  const [ userId, setUserId ] = useState(14)
  const [ userInfo, setuserInfo ] = useState({})
  const [ tweets, setTweets ] = useState([])

  const [ likes, setLikes ] = useState([])

  /* Tweet */
  const [ checkWordLength, setCheckWordLength ] = useState(false)
  const [ checkInputIsSpace, setCheckInputIsSpace ] = useState(false)
  const [ disabledButton, setDisabledButton ] = useState(false)



  const handleClick = () => {
    const test = replyToTweet()
    console.log(test)
  }

  useEffect(() =>{
    const getAllTweetContentAsync = async () => {
      try {
        const allTweet = await getAllTweetPost()
        setAllTweet(allTweet.map((post) => ({...post})))
        } catch (error) {
        console.error (error);
      }
    }
    getAllTweetContentAsync()
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
        const userInfo = await getUserInfo(userId)
        setuserInfo(userInfo)
      } catch (error) {
        console.error (error);
      }
    }
    getUserInfoAsyn()
  }, [userId])

  const handleClickedId = (id) => {
    setUserId(id)
  }

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

  useEffect(() => {
    const getAllRepliesAsyn = async () => {
      try {
        const replies = await getAllReplies(replyId)
        setAllReplies(replies.map((post) => ({...post})))
      } catch (error) {
        console.error (error);
      }
    }
    getAllRepliesAsyn()
  }, [replyId, addReply])

  useEffect(() =>{
    const getUserLikesAsync = async () => {
      try {
        const allLikes = await getUserLikesInfo()
        setLikes(allLikes.map((like) => ({...like})))
        } catch (error) {
        console.error (error);
      }
    }
    getUserLikesAsync()
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

    const handleAddReply = async () => {
      if (inputValue.length === 0 || inputValue.trim() === '') {
        return
      }
  
      try {
        const data = await replyToTweet(inputValue, replyId)
        setAddReply({
          comment: data.comment
        })
        /* 輸入框淨空 & 關閉視窗 */
        setInputValue('');
        setOpenModalReply(false)

        /* 推文發出後重新get回覆列表 */
        const getAllRepliesAsyn = async () => {
          try {
            const replies = await getAllReplies(replyId)
            setAllReplies(replies.map((post) => ({...post})))
            } catch (error) {
            console.error (error);
          }
        }
        getAllRepliesAsyn()

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

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChangeReply = (id) => {
    setReplyId(id)
    
    const currentTweet = allTweet.find((tweet) => tweet.id === id)
    setCurrentTweet(currentTweet)
  }



    return (
        <div className="container">
            <Sidebar onOpenModalTweet={handleOpenModalTweet}/>
            <Routes>
              <Route exact path="/" element={<Twittes allTweet={allTweet} tweets={tweets} onToggleLike={handleToggleLike} onOpenModalReply={handleOpenModalReply} onChange={handleChange} inputValue={inputValue} onAddTweet={handleAddTweet} onSubmit={handleSubmit} disabledButton={disabledButton} checkWordLength={checkWordLength} checkInputIsSpace={checkInputIsSpace} userId={userId} onClickedId={handleClickedId} onChangeReply={handleChangeReply} replyId={replyId}/>} />
              <Route exact path="/profile/:id" element={<Profile onOpenEditModal={handleOpenModalEdit} postCards={postCards} userInfo={userInfo} allReplies={allReplies} onToggleLike={handleToggleLike} onOpenModalReply={handleOpenModalReply} likes={likes} />} />
              <Route exact path="/setting" element={<Setting />} />
              <Route exact path="/other" element={<OtherUserProfile userInfo={userInfo} postCards={postCards} onOpenModalReply={handleOpenModalReply}/>} />
              <Route exact path="/replyList/:id" element={<ReplyList onOpenModalReply={handleOpenModalReply} allReplies={allReplies} currentTweet={currentTweet} />} />
            </Routes>
            <Populars trendUsers={trendUsers} onTogglefollow={handleToggleFollow}/>
            { openModalReply && <ReplyModal closeModal={handleCloseModalReply} replyPostInfo={replyPostInfo} onChange={handleChange} onAddReply={handleAddReply} /> }
            { openModalTweet && <TwitterModal closeModal={handleCloseModalTweet} onChange={handleChange} inputValue={inputValue} onAddTweet={handleAddTweet} checkWordLength={checkWordLength} onSubmit={handleSubmit} disabledButton={disabledButton} checkInputIsSpace={checkInputIsSpace}/> }
            { openModelEdit && <EditProfileModal closeModal={handleCloseModalEdit}/>}
        </div>
      );
}

export default HomePage