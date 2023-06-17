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
import { patchConfig } from "api/configSetting";

// const dummyUserInfo = {
//   id: 1,
//   account: "wonderwoman",
//   name: "Diana",
//   email: "diana@gmail.com",
//   password: "",
//   passwordComfirmation: "",
// };



// currentMember: payload && {
//   id: payload.id,
//   name: payload.name,
//   email: payload.email,
//   account: payload.account,
// };


const HomePage = () => {
  const [trendUsers, setTrenderUsers] = useState([]);
  const [postCards, setPostCards] = useState([]);
  const [openModalReply, setOpenModalReply] = useState(false);
  const [openModalTweet, setOpenMoadlTweet] = useState(false);
  const [openModelEdit, setOpenModelEdit] = useState(false);
  const [userInfo, setuserInfo] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [tweets, setTweets] = useState([]);

  /////////////////////////////////////////////////
  const { currentMember } = useAuth();
  // const currentId = currentMember.id;
  const [currentId, setCurrentId] = useState(currentMember?.id);
  console.log("現在的id是", currentId);
  const [account, setAccount] = useState(currentMember?.account);
  const [name, setUsername] = useState(currentMember?.name);
  const [email, setEmail] = useState(currentMember?.email);
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [alertText, setAlertText] = useState("");
  /////////////////////////////////////////////////

  /////////////////////////////////////////////////
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      console.log("登愣沒有isAuthenticated了");
      navigate("users/login");
    }
  }, [navigate, isAuthenticated]);

  const handleClick = () => {
    const test = getPopulars();
    console.log(test);
  };
  /////////////////////////////////////////////////

  useEffect(() => {
    const getTweetContentAsync = async () => {
      try {
        const tweetInfo = await getUserTweetInfo();
        setPostCards(tweetInfo.map((post) => ({ ...post })));
      } catch (error) {
        console.error(error);
      }
    };
    getTweetContentAsync();
  }, []);

  useEffect(() => {
    const getUserInfoAsyn = async () => {
      try {
        const userInfo = await getUserInfo();
        setuserInfo(userInfo);
      } catch (error) {
        console.error(error);
      }
    };
    getUserInfoAsyn();
  }, []);

  useEffect(() => {
    const getPopularsAsyn = async () => {
      try {
        const popular = await getPopulars();
        setTrenderUsers(popular.map((people) => ({ ...people })));
      } catch (error) {
        console.error(error);
      }
    };
    getPopularsAsyn();
  }, []);

  const handleToggleFollow = (id, isFollowed) => {
    setTrenderUsers((prevUsers) => {
      return prevUsers.map((trend) => {
        if (trend.id === id) {
          return {
            ...trend,
            isFollowed: !isFollowed,
          };
        }
        return trend;
      });
    });
  };

  const handleToggleLike = (id, isLiked) => {
    setPostCards((prevCards) => {
      return prevCards.map((card) => {
        if (card.id === id) {
          return {
            ...card,
            isLiked: !isLiked,
          };
        }
        return card;
      });
    });
  };

  const handleOpenModalReply = (id) => {
    setOpenModalReply(true);
  };

  const handleCloseModalReply = () => {
    setOpenModalReply(false);
  };

  const handleOpenModalTweet = () => {
    setOpenMoadlTweet(true);
  };

  const handleCloseModalTweet = () => {
    setOpenMoadlTweet(false);
  };

  const handleOpenModalEdit = () => {
    setOpenModelEdit(true);
  };

  const handleCloseModalEdit = () => {
    setOpenModelEdit(false);
  };

  const handleChange = (value) => {
    setInputValue(value);
  };

  const handleAddTweet = async () => {
    if (inputValue.length === 0) {
      return;
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
        ];
      });
      console.log(data);
      console.log(tweets);
      setInputValue("");
    } catch (error) {
      console.error(error);
    }
  };
  ///////////////////////////////////
  const handleSaveConfig = async () => {
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
    let id = currentId;
    console.log(`currenId是${currentId}, id是${id}`);
    const data = await patchConfig({
      currentId,
      name,
      account,
      email,
      password,
      checkPassword,
    });
    console.log("按到了");
    console.log(data);
    setAlertText(data.message);
    console.log(alertText);
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
              onClick={handleSaveConfig}
              alertText={alertText}
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
      <button className="test" onClick={handleClick}>
        TEST
      </button>
    </div>
  );
};

export default HomePage;
