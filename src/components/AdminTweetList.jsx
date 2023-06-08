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
      <div className="adminMainTitle">推文清單</div>
      <AdminTweetCollection tweets={tweets}/>
    </div>
  );
};

export default AdminTweetList