const AdminTweetItem = ( { tweet , onDelete } ) => {
  const deleteImagePath = require("../assets/icons/delete.svg").default;

  const getTimeDifference = (tweetTimestamp) => {
    const tweetDate = new Date(tweetTimestamp);
    const currentDate = new Date();

    const timeDifference = Math.abs(currentDate - tweetDate); // 獲取兩個日期的毫秒數差距
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60)); // 轉換為小時
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // 轉換為天數

    if (daysDifference > 0) {
      return `${daysDifference} 天前`;
    } else {
      return `${hoursDifference} 小時前`;
    }
  };
  
  let shortenedContent =''
  if (tweet.description.length > 50) {
    shortenedContent = tweet.description.slice(0, 50) + "...";
  }else shortenedContent = tweet.description;

  return (
    <div className="adminTweetItemWrapper">
      <div className="smallAvatarWrapper">
        <img className="smallAvatar" src={tweet.avatar} alt="avatar" />
      </div>
      <div className="tweetRight">
        <div className="tweetInfo">
          <div className="tweetName">{tweet.name}</div>
          <div className="tweetOtherInfo">
            ＠{tweet.account}・{getTimeDifference(tweet.createdAt)}
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
