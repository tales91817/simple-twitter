import AdminTweetList from "components/AdminTweetList";
import AdminLeftColumn from "../components/common/AdminLeftColumn";
import "./AdminContentPageFrame.scss";
import { ReactComponent as HomeSelected } from "../assets/icons/home_selected.svg";
import { ReactComponent as Profile } from "../assets/icons/profile.svg";
import { useEffect, useState } from "react";
import { deleteTweet, getTweets } from "../api/admin";
import { useNavigate } from "react-router-dom";
import { useAuthAdmin } from "contexts/AuthAdminContext";


const AdminMainPage = () => {
  const [tweets, setTweets] = useState([]);

  const handleDelete = async (id) => {
    try {
      await deleteTweet(id);
      setTweets(tweets.filter((tweet) => tweet.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  ////////身份驗證與頁面自動導引//////////
  const navigate = useNavigate();
  const { isAdminAuthenticated } = useAuthAdmin();

  useEffect(() => {
    if (!isAdminAuthenticated) {
      console.log("登愣沒有isAdminAuthenticated了");
      navigate("admin/users");
    }
  }, [navigate, isAdminAuthenticated]);


  useEffect(() => {
    const getTweetsAsync = async () => {
      try {
        const tweets = await getTweets();
        setTweets(tweets);
      } catch (error) {
        console.error(error);
      }
    };
    getTweetsAsync();
  }, []);

  return (
    <div className="adminContentPageContainer ">
      <AdminLeftColumn icon1={<HomeSelected />} icon2={<Profile />} />
      <AdminTweetList tweets={tweets} onDelete={handleDelete} />
    </div>
  );
};

export default AdminMainPage;
