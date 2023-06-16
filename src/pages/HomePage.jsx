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
import { getUserTweetInfo, getUserInfo, postTweet, getPopulars } from 'api/UserInfo'



const HomePage = () => {
  const [ trendUsers, setTrenderUsers ] = useState([])
  const [ postCards, setPostCards ] = useState([])
  const [ openModalReply, setOpenModalReply ] = useState(false)
  const [ openModalTweet, setOpenMoadlTweet ] = useState(false)
  const [ openModelEdit, setOpenModelEdit ] = useState(false)
  const [ userInfo, setuserInfo ] = useState({})
  const [ inputValue, setInputValue ] = useState('')
  const [ tweets, setTweets ] = useState([])

  useEffect(() => {
    const getTweetContentAsync = async () => {
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
      console.log(data)
      console.log(tweets)
      setInputValue('');
    } catch(error) {
      console.error(error);
    }
  }

    return (
        <div className="container">
            <Sidebar onOpenModalTweet={handleOpenModalTweet}/>
            <HashRouter>
            <Routes>
              <Route exact path="/" element={<Twittes tweets={tweets} onToggleLike={handleToggleLike} onOpenModalReply={handleOpenModalReply} onChange={handleChange} inputValue={inputValue} onAddTweet={handleAddTweet} />} />
              <Route path="/profile" element={<Profile onOpenEditModal={handleOpenModalEdit} postCards={postCards} userInfo={userInfo}/>} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/other" element={<OtherUserProfile userInfo={userInfo} postCards={postCards}/>} />
              <Route path="/replyList" element={<ReplyList onOpenModalReply={handleOpenModalReply}/>} />
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