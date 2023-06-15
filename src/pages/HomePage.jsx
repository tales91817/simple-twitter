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
import { getUserTweetInfo, getUserInfo, getPopulars, getUserLikesInfo } from 'api/UserInfo'
import { getAllTweetPost, postTweet } from 'api/tweetInfo';
import { getAllReplies, replyToTweet } from 'api/reply';

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

  /* UserProfile */
  const [ userInfo, setuserInfo ] = useState({})
  const [ tweets, setTweets ] = useState([])
  const [ allReplies, setAllReplies ] = useState([])
  const [ likes, setLikes ] = useState([])

  const handleClick = () => {
    const test = getUserLikesInfo()
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
        const tweetInfo = await getUserTweetInfo()
        setPostCards(tweetInfo.map((post) => ({...post})))
        } catch (error) {
        console.error (error);
      }
    }
    getUserTweetContentAsync()
  }, [])

  useEffect(() => {
    const getUserInfoAsyn = async () => {
      try {
        const userInfo = await getUserInfo()
        setuserInfo(userInfo)
      } catch (error) {
        console.error (error);
      }
    }
    getUserInfoAsyn()
  }, [])

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
        const replies = await getAllReplies()
        setAllReplies(replies.map((post) => ({...post})))
      } catch (error) {
        console.error (error);
      }
    }
    getAllRepliesAsyn()
  }, [])

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

  /* 先留著，postReply */
  // const handleReply = async() => {
  //   if (inputValue.length === 0 || inputValue.trim() === '') {
  //     return
  //   }
  //     const {data} = await replyToTweet({
  //       comments: replyInputValue
  //     })
  //   try {

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

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

    return (
        <div className="container">
            <Sidebar onOpenModalTweet={handleOpenModalTweet}/>
            <Routes>
              <Route exact path="/" element={<Twittes allTweet={allTweet} tweets={tweets} onToggleLike={handleToggleLike} onOpenModalReply={handleOpenModalReply} onChange={handleChange} inputValue={inputValue} onAddTweet={handleAddTweet} />} />
              <Route exact path="/profile" element={<Profile onOpenEditModal={handleOpenModalEdit} postCards={postCards} userInfo={userInfo} allReplies={allReplies} onToggleLike={handleToggleLike} onOpenModalReply={handleOpenModalReply} likes={likes}/>} />
              <Route exact path="/setting" element={<Setting />} />
              <Route exact path="/other" element={<OtherUserProfile userInfo={userInfo} postCards={postCards} onOpenModalReply={handleOpenModalReply}/>} />
              <Route exact path="/replyList" element={<ReplyList onOpenModalReply={handleOpenModalReply} allReplies={allReplies}/>} />
            </Routes>
            <Populars trendUsers={trendUsers} onTogglefollow={handleToggleFollow}/>
            { openModalReply && <ReplyModal closeModal={handleCloseModalReply} replyPostInfo={replyPostInfo} /> }
            { openModalTweet && <TwitterModal closeModal={handleCloseModalTweet} onChange={handleChange} inputValue={inputValue} onAddTweet={handleAddTweet}/> }
            { openModelEdit && <EditProfileModal closeModal={handleCloseModalEdit}/>}
            <button class="test" onClick={handleClick} >TEST</button>
        </div>
      );
}

export default HomePage