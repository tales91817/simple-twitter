import "./AdminTweet.scss"
import AdminTweetItem from "./AdminTweetItem";


const AdminTweetCollection = ({tweets}) => {
  return (
   <div className="adminTweetCollection">
        {tweets.map((tweet) => {
          return <AdminTweetItem key={tweet.id} tweet={tweet} />;
        })
        }
    </div>
  );
};


const AdminTweetList = ({tweets}) => {
  return (
    <div className="adminTweetList">
      <div className="adminTitle">推文清單</div>
      <AdminTweetCollection tweets={tweets}/>
    </div>
  );
};

export default AdminTweetList