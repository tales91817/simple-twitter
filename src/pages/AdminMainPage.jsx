import AdminTweetList from "components/AdminTweetList";
import AdminLeftColumn from "../components/common/AdminLeftColumn";
import "./AdminContentPageFrame.scss";
import { ReactComponent as HomeSelected } from "../assets/icons/home_selected.svg";
import { ReactComponent as Profile } from "../assets/icons/profile.svg";
import { useEffect, useState } from "react";
import { deleteTweet, getTweets } from "../api/admin";

// const dummyTweets = [
//   {
//     id: "1",
//     avatar: "../assets/icons/other-user-avatar.svg",
//     name: "Apple",
//     account: "apple",
//     time: "3小時",
//     content:
//       "1Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
//   },
//   {
//     id: "2",
//     avatar: "../assets/icons/other-user-avatar.svg",
//     name: "Apple",
//     account: "apple",
//     time: "3小時",
//     content:
//       "2Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
//   },
//   {
//     id: "3",
//     avatar: "../assets/icons/other-user-avatar.svg",
//     name: "Apple",
//     account: "apple",
//     time: "3小時",
//     content:
//       "3Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
//   },
//   {
//     id: "4",
//     avatar: "../assets/icons/other-user-avatar.svg",
//     name: "Apple",
//     account: "apple",
//     time: "3小時",
//     content:
//       "4Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
//   },
//   {
//     id: "5",
//     avatar: "../assets/icons/other-user-avatar.svg",
//     name: "Apple",
//     account: "apple",
//     time: "3小時",
//     content:
//       "5Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
//   },
//   {
//     id: "6",
//     avatar: "../assets/icons/other-user-avatar.svg",
//     name: "Apple",
//     account: "apple",
//     time: "3小時",
//     content:
//       "6Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
//   },
//   {
//     id: "7",
//     avatar: "../assets/icons/other-user-avatar.svg",
//     name: "Apple",
//     account: "apple",
//     time: "3小時",
//     content:
//       "7Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
//   },
//   {
//     id: "8",
//     avatar: "../assets/icons/other-user-avatar.svg",
//     name: "Apple",
//     account: "apple",
//     time: "3小時",
//     content:
//       "8Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
//   },
//   {
//     id: "9",
//     avatar: "../assets/icons/other-user-avatar.svg",
//     name: "Apple",
//     account: "apple",
//     time: "3小時",
//     content:
//       "9Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
//   },
//   {
//     id: "10",
//     avatar: "../assets/icons/other-user-avatar.svg",
//     name: "Apple",
//     account: "apple",
//     time: "3小時",
//     content:
//       "10Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
//   },
// ];

const AdminMainPage = () => {
  const [tweets, setTweets] = useState([]);
  
  const handleDelete = async(id) => {
    try{
      await deleteTweet(id)
    setTweets(tweets.filter((tweet) => tweet.id !== id));
    } catch (error) {
      console.error(error)
    }
    
  };

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
      <AdminLeftColumn
        icon1={<HomeSelected />}
        icon2={<Profile />}
      />
      <AdminTweetList tweets={tweets} onDelete={handleDelete} />
    </div>
  );
};

export default AdminMainPage;
