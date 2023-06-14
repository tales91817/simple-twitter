const AdminTweetItem = ( { tweet , onDelete } ) => {
  const deleteImagePath = require("../assets/icons/delete.svg").default;

  let shortenedContent =''
  if (tweet.description.length > 50) {
    shortenedContent = tweet.description.slice(0, 50) + "...";
  }

  return (
    <div className="adminTweetItemWrapper">
      <div className="smallAvatarWrapper">
        <img className="smallAvatar" src={tweet.avatar} alt="avatar" />
      </div>
      <div className="tweetRight">
        <div className="tweetInfo">
          <div className="tweetName">{tweet.name}</div>
          <div className="tweetOtherInfo">
            ＠{tweet.account}・{tweet.createdAt}
          </div>
          <div
            className="deleteButton"
            onClick={() => {
              onDelete?.(tweet.id);
            }}
          >
            <img className="deleteImg" src={deleteImagePath} alt="delete" />
          </div>
        </div>
        <div className="tweetContent">{shortenedContent}</div>
      </div>
    </div>
  );
};

export default AdminTweetItem;
