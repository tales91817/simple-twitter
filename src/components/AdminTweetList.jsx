import "./AdminTweet.scss"
import AdminTweetItem from "./AdminTweetItem";


const AdminTweetCollection = ({ tweets, onDelete }) => {
  return (
    <div className="adminTweetCollection">
      {tweets.map((tweet) => {
        return (
          <AdminTweetItem
            key={tweet.id}
            tweet={tweet}
            onDelete={(id) => onDelete(id)}
          />
        );
      })}
    </div>
  );
};


const AdminTweetList = ({ tweets, onDelete }) => {
  return (
    <div className="adminTweetList">
      <div className="adminTitle">推文清單</div>
      <AdminTweetCollection tweets={tweets} onDelete={(id) => onDelete(id)} />
    </div>
  );
};

export default AdminTweetList