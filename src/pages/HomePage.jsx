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
import { Route, Routes, useNavigate } from 'react-router-dom';
import ReplyList from 'components/MainPageFunctions/ReplyList/ReplyList';
import TwitterModal from 'components/MainPageFunctions/TwitterModal';
import EditProfileModal from 'components/MainPageFunctions/EditProfileModal';
import FollowInfo from 'components/MainPageFunctions/Follower/FollowInfo';
import { getUserTweetInfo, getUserInfo, getPopulars, getUserLikesInfo, putUserProfileInfo, getUserReplies } from 'api/UserInfo'
import { getAllTweetPost, postTweet } from 'api/tweetInfo';
import { getAllReplies, replyToTweet } from 'api/reply';
import { addLikes, cancelLikes } from 'api/like';
import { deleteFollower, postFollower, getFollower, getFollowing } from 'api/follow';
import Swal from "sweetalert2";

/////////////////////以下是 Context 引用 與 <Setting /> 會用到的函式/////////////////////////
import { useAuth } from "contexts/AuthContext";
import { patchConfig } from "api/configSetting";
/////////////////////以上是 Context 引用 與 <Setting /> 會用到的函式/////////////////////////

const HomePage = () => {
  /* Main */
  const [allTweet, setAllTweet] = useState([]);
  const [trendUsers, setTrenderUsers] = useState([]);
  const [postCards, setPostCards] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [currentId, setCurrentId] = useState(localStorage.getItem("id"));

  /* Main & ReplyList */
  const [openModalReply, setOpenModalReply] = useState(false);
  const [openModalTweet, setOpenMoadlTweet] = useState(false);
  const [openModelEdit, setOpenModelEdit] = useState(false);
  const [replyPostInfo, setRelyPostInfo] = useState({});
  const [replyId, setReplyId] = useState("");
  const [allReplies, setAllReplies] = useState([]);
  const [currentTweet, setCurrentTweet] = useState({});
  const [addReply, setAddReply] = useState({});

  /* UserProfile */
  const [userInfo, setuserInfo] = useState({});
  const [userId, setUserId] = useState(currentId);
  const [tweets, setTweets] = useState([]);
  const [likes, setLikes] = useState([]);
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputIntroValue, setInputIntroValue] = useState("");
  const [followers, setFollowers] = useState([]);
  const [followings, setFollowings] = useState([]);

  /* Tweet */
  const [checkWordLength, setCheckWordLength] = useState(false);
  const [checkInputIsSpace, setCheckInputIsSpace] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);

  /* Likes */
  const [currentClickLike, setCurrentClickLike] = useState("");

  ///////////////////////以下是 <Setting /> 元件會用到的 state ////////////////////////
  const { currentMember } = useAuth();
  // const currentId = currentMember.id;
  const [currentUserId, setCurrentUserId] = useState(currentMember?.id);
  console.log("現在的id是", currentUserId);
  const [account, setAccount] = useState(currentMember?.account);
  const [name, setUsername] = useState(currentMember?.name);
  const [email, setEmail] = useState(currentMember?.email);
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [alertText, setAlertText] = useState("");
  ///////////////////////以下是 <Setting /> 元件會用到的 state //////////////////////////

  //////////////////以下是身份驗證與頁面自動導引//////////////////////////
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      console.log("登愣沒有isAuthenticated了");
      navigate("users/login");
    }
  }, [navigate, isAuthenticated]);
  /////////////////以上是身份驗證與頁面自動導引////////////////////////////////

  const handleClick = () => {
    // const test = getPopulars();
    const test = getFollower(24);
    console.log(test);
  };

  /* 取得所有推文(主畫面) */
  useEffect(() => {
    const getAllTweetContentAsync = async () => {
      try {
        const allTweet = await getAllTweetPost();
        setAllTweet(allTweet.map((post) => ({ ...post })));
      } catch (error) {
        console.error(error);
      }
    };
    getAllTweetContentAsync();
  }, []);

  useEffect(() => {
    const getUserTweetContentAsync = async () => {
      try {
        const tweetInfo = await getUserTweetInfo(userId);
        setPostCards(tweetInfo.map((post) => ({ ...post })));
      } catch (error) {
        console.error(error);
      }
    };
    getUserTweetContentAsync();
  }, [userId]);

  useEffect(() => {
    const getUserInfoAsyn = async () => {
      try {
        const info = await getUserInfo(currentId);
        setuserInfo(info);
      } catch (error) {
        console.error(error);
      }
    };
    getUserInfoAsyn();
  }, [currentId]);

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

  /* 取得使用者的所有推文 */
  useEffect(() => {
    const getUserTweetContentAsync = async () => {
      try {
        const tweetInfo = await getUserTweetInfo(currentId);
        setPostCards(tweetInfo.map((post) => ({ ...post })));
      } catch (error) {
        console.error(error);
      }
    };
    getUserTweetContentAsync();
  }, [currentId]);

  /* 取得使用者的所有回覆 */

  useEffect(() => {
    const getAllRepliesAsyn = async () => {
      try {
        const replies = await getAllReplies(currentId);
        setAllReplies(replies.map((post) => ({ ...post })));
      } catch (error) {
        console.error(error);
      }
    };
    getAllRepliesAsyn();
  }, [currentId, addReply]);

  /* 取得使用者的所有喜歡 */
  useEffect(() => {
    const getUserLikesAsync = async () => {
      try {
        const allLikes = await getUserLikesInfo(currentId);
        setLikes(allLikes.map((like) => ({ ...like })));
      } catch (error) {
        console.error(error);
      }
    };
    getUserLikesAsync();
  }, [currentId]);

  /* 取得跟隨者 */
  useEffect(() => {
    const getFollowerAsync = async () => {
      try {
        const info = await getFollowing(currentId);
        setFollowings(info);
      } catch (error) {
        console.error(error);
      }
    };
    getFollowerAsync();
  }, [currentId]);

  useEffect(() => {
    const getFollowingAsync = async () => {
      try {
        const info = await getFollower(currentId);
        setFollowers(info);
      } catch (error) {
        console.error(error);
      }
    };
    getFollowingAsync();
  }, [currentId]);

  /*點擊後顯示該個人簡介 */
  const handleClickedId = (id) => {
    const getUserInfoAsyn = async () => {
      try {
        const info = await getUserInfo(id);
        setuserInfo(info);
      } catch (error) {
        console.error(error);
      }
    };
    getUserInfoAsyn();

    const getUserTweetContentAsync = async () => {
      try {
        const tweetInfo = await getUserReplies(id);
        setPostCards(tweetInfo.map((post) => ({ ...post })));
      } catch (error) {
        console.error(error);
      }
    };
    getUserTweetContentAsync();

    const getUserLikesAsync = async () => {
      try {
        const allLikes = await getUserLikesInfo(id);
        setLikes(allLikes.map((like) => ({ ...like })));
      } catch (error) {
        console.error(error);
      }
    };
    getUserLikesAsync();

    const getAllRepliesAsyn = async () => {
      try {
        const replies = await getAllReplies(id);
        setAllReplies(replies.map((post) => ({ ...post })));
      } catch (error) {
        console.error(error);
      }
    };
    getAllRepliesAsyn();
  };

  /* 修改個人簡介 */
  const handleChangeName = (value) => {
    setInputNameValue(value);
  };

  const handleChangeIntro = (value) => {
    setInputIntroValue(value);
  };

  const handleChangeImg = () => {};
  /* 儲存個人資料 */
  const handleOnSave = () => {
    const payload = {
      username: inputNameValue,
      userIntroduction: inputIntroValue,
    };
    setOpenModelEdit(false);
    putUserProfileInfo(currentId, payload);
    const getUserInfoAsyn = async () => {
      try {
        const info = await getUserInfo(currentId);
        setuserInfo(info);
      } catch (error) {
        console.error(error);
      }
    };
    getUserInfoAsyn();
  };

  /* 按讚功能 & 取消讚功能 */
  const handleToggleLike = (id, isLiked) => {
    if (isLiked === true) {
      cancelLikes(id);
      const getAllTweetContentAsync = () => {
        try {
          const allTweet = getAllTweetPost();
          setAllTweet(allTweet.map((post) => ({ ...post })));
        } catch (error) {
          console.error(error);
        }
      };
      getAllTweetContentAsync();
      setCurrentClickLike(id);
    } else if (isLiked === false) {
      addLikes(id);
      const getAllTweetContentAsync = () => {
        try {
          const allTweet = getAllTweetPost();
          setAllTweet(allTweet.map((post) => ({ ...post })));
        } catch (error) {
          console.error(error);
        }
      };
      getAllTweetContentAsync();
      setCurrentClickLike(id);
    }
  };

  /* 新增推文 */
  const handleAddTweet = async () => {
    if (inputValue.length === 0 || inputValue.trim() === "") {
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
      setInputValue("");
      setOpenMoadlTweet(false);
      /* 推文發出後重新get推文列 */
      const getAllTweetContentAsync = async () => {
        try {
          const allTweet = await getAllTweetPost();
          setAllTweet(allTweet.map((post) => ({ ...post })));
        } catch (error) {
          console.error(error);
        }
      };
      getAllTweetContentAsync();

      /* 推文發出後重新get使用者的發文列表 */
      const getUserTweetContentAsync = async () => {
        try {
          const tweetInfo = await getUserTweetInfo();
          setPostCards(tweetInfo.map((post) => ({ ...post })));
        } catch (error) {
          console.error(error);
        }
      };
      getUserTweetContentAsync();
    } catch (error) {
      console.error(error);
    }
  };

  /* 在推文新增回覆 */
  const handleAddReply = async (id) => {
    if (inputValue.length === 0 || inputValue.trim() === "") {
      return;
    }

    try {
      const data = await replyToTweet(inputValue, id);
      setAddReply({
        comment: data.comment,
      });
      /* 輸入框淨空 & 關閉視窗 */
      setInputValue("");
      setOpenModalReply(false);

      /* 推文發出後重新get回覆列表 */
      const getAllTweetContentAsync = async () => {
        try {
          const allTweet = await getAllTweetPost();
          setAllTweet(allTweet.map((post) => ({ ...post })));
        } catch (error) {
          console.error(error);
        }
      };
      getAllTweetContentAsync();
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenModalReply = (
    id,
    avatar,
    name,
    account,
    createdAt,
    description
  ) => {
    setOpenModalReply(true);
    setRelyPostInfo({
      id: id,
      avatar: avatar,
      name: name,
      account: account,
      createdAt: createdAt,
      description: description,
    });
  };

  const handleCloseModalReply = () => {
    setOpenModalReply(false);
    setInputValue("");
  };

  const handleOpenModalTweet = () => {
    setOpenMoadlTweet(true);
  };

  const handleCloseModalTweet = () => {
    setOpenMoadlTweet(false);
    setInputValue("");
  };

  const handleOpenModalEdit = () => {
    setOpenModelEdit(true);
  };

  const handleCloseModalEdit = () => {
    setOpenModelEdit(false);
    setInputValue("");
  };

  /* 輸入框限制文字內容 */
  const handleChange = (value) => {
    setInputValue(value);

    if (value.length >= 140) {
      setCheckWordLength(true);
      setDisabledButton(true);
    } else if (value.length <= 140) {
      setCheckWordLength(false);
      setDisabledButton(false);
    }

    if (value.length === 0 || value.trim() === "") {
      setDisabledButton(true);
      setCheckInputIsSpace(true);
    } else if (value.length !== 0 || value.trim() !== "") {
      setDisabledButton(false);
      setCheckInputIsSpace(false);
    }
  };

  /* 取消預設送出 */
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  /* 從主畫面的推特文進入回覆清單的回覆內容 */
  const handleChangeReply = async (id) => {
    setReplyId(id);
    try {
      const Replies = await getAllReplies(id);
      setAllReplies(Replies);
    } catch (error) {
      console.log(error);
    }

    const currentTweet = allTweet.find((tweet) => tweet.id === id);
    setCurrentTweet(currentTweet);
  };

  /* 跟隨 & 取消跟隨 */
  const handleClickFollow = (id, isFollowed) => {
    if (isFollowed === true) {
      deleteFollower(id);
      const getUserInfoAsyn = async () => {
        try {
          const info = await getUserInfo(id);
          setuserInfo(info);
        } catch (error) {
          console.error(error);
        }
      };
      getUserInfoAsyn();
    } else if (isFollowed === false) {
      postFollower(id);
      const getUserInfoAsyn = async () => {
        try {
          const info = await getUserInfo(id);
          setuserInfo(info);
        } catch (error) {
          console.error(error);
        }
      };
      getUserInfoAsyn();
    }
  };

  //////////////// 以下是 <Setting /> 的儲存按鈕的handler ///////////////////
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
      setAlertText("尚未輸入密碼！");
      Swal.fire({
        position: "top",
        title: "尚未輸入密碼！",
        timer: 1000,
        icon: "error",
        showConfirmButton: false,
      });
      return;
    } else {
      setAlertText("");
    }
    if (checkPassword.length === 0) {
      setAlertText("尚未輸入確認密碼！");
      Swal.fire({
        position: "top",
        title: "尚未輸入確認密碼！",
        timer: 1000,
        icon: "error",
        showConfirmButton: false,
      });
      return;
    } else {
      setAlertText("");
    }

    console.log("現在的id是", currentUserId);
    let id = currentUserId;
    console.log(`currenId是${currentUserId}, id是${id}`);
    const data = await patchConfig({
      id,
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
    const { success } = data;
    if (success) {
      // 編輯成功訊息
      Swal.fire({
        position: "top",
        title: "儲存成功！",
        timer: 1000,
        icon: "success",
        showConfirmButton: false,
      });
      return;
    }
    // 編輯失敗訊息
    Swal.fire({
      position: "top",
      title: alertText,
      timer: 1000,
      icon: "error",
      showConfirmButton: false,
    });

    // if (data.message) {console.log(data.message)};
  };
  /////////////////// 以上是 <Setting /> 的儲存按鈕的handler ///////////////////

  return (
    <div className="container">
      <Sidebar onOpenModalTweet={handleOpenModalTweet} />
      <Routes>
        <Route
          path="*"
          element={
            <Twittes
              allTweet={allTweet}
              tweets={tweets}
              onToggleLike={handleToggleLike}
              onOpenModalReply={handleOpenModalReply}
              onChange={handleChange}
              inputValue={inputValue}
              onAddTweet={handleAddTweet}
              onSubmit={handleSubmit}
              disabledButton={disabledButton}
              checkWordLength={checkWordLength}
              checkInputIsSpace={checkInputIsSpace}
              currentId={currentId}
              onClickedId={handleClickedId}
              onChangeReply={handleChangeReply}
              replyId={replyId}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile
              onOpenEditModal={handleOpenModalEdit}
              postCards={postCards}
              userInfo={userInfo}
              allReplies={allReplies}
              onToggleLike={handleToggleLike}
              onOpenModalReply={handleOpenModalReply}
              likes={likes}
              onClickFollow={handleClickFollow}
            />
          }
        />
        <Route
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
          path="/other"
          element={
            <OtherUserProfile
              userInfo={userInfo}
              postCards={postCards}
              onOpenModalReply={handleOpenModalReply}
            />
          }
        />
        <Route
          path="/replyList"
          element={
            <ReplyList
              onOpenModalReply={handleOpenModalReply}
              allReplies={allReplies}
              currentTweet={currentTweet}
            />
          }
        />
        <Route
          path="/followers"
          element={<FollowInfo followers={followers} followings={followings} />}
        />
      </Routes>
      <Populars trendUsers={trendUsers} />
      {openModalReply && (
        <ReplyModal
          closeModal={handleCloseModalReply}
          replyPostInfo={replyPostInfo}
          onChange={handleChange}
          onAddReply={handleAddReply}
        />
      )}
      {openModalTweet && (
        <TwitterModal
          closeModal={handleCloseModalTweet}
          onChange={handleChange}
          inputValue={inputValue}
          onAddTweet={handleAddTweet}
          checkWordLength={checkWordLength}
          onSubmit={handleSubmit}
          disabledButton={disabledButton}
          checkInputIsSpace={checkInputIsSpace}
        />
      )}
      {openModelEdit && <EditProfileModal closeModal={handleCloseModalEdit} />}
      <button class="test" onClick={handleClick}>
        TEST
      </button>
    </div>
  );
}

export default HomePage;
