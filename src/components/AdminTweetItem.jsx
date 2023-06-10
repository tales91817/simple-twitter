const AdminTweetItem = ( {tweet} ) => {
  const AvatarImagePath = require("../assets/icons/other-user-avatar.svg").default;
  const deleteImagePath = require("../assets/icons/delete.svg").default;

  let shortenedContent =''
  if (tweet.content.length > 50) {
  shortenedContent = tweet.content.slice(0, 50) + "...";
}
  return (
    <div className="adminTweetItemWrapper">
      <div className="smallAvatar">
        <img src={AvatarImagePath} alt="avatar" />
      </div>
      <div className="tweetRight">
        <div className="tweetInfo">
          <div className="tweetName">{tweet.name}</div>
          <div className="tweetOtherInfo">
            ＠{tweet.account}・{tweet.time}
          </div>
          <div className="deleteButton">
            <img className="deleteImg" src={deleteImagePath} alt="delete" />
          </div>
        </div>
        <div className="tweetContent">{shortenedContent}</div>
      </div>
    </div>
  );
};

export default AdminTweetItem;
