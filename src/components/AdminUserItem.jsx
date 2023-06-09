import { ReactComponent as IconPost } from "assets/icons/icon_post.svg";

import { ReactComponent as IconLike } from "assets/icons/icon_like.svg";

const AdminUserItem = ({ user }) => {
  const AvatarImagePath =
    require("../assets/images/main-user-John-Doe.svg.svg").default;

  return (
    <div className="adminUserItemWrapper">
      <div className="midAvatar">
        <img className="avatar" src={AvatarImagePath} alt="avatar" />
      </div>
      <div>
        <img className="cover" src={user.cover} alt="" />
      </div>

      <div className="name">{user.name}</div>
      <div className="account">@{user.account}</div>

      <div className="rowActions">
        <IconPost className="iconPost" />
        <div>{user.tweetCount}</div>
        <IconLike className="iconLike"/>
        <div>{user.likeCount}</div>
      </div>

      <div className="rowFollow">
        <div className="followLeft">
          {user.followerCount} 個<span className="followSpan">跟隨中</span>
        </div>
        <div>
          {user.followingCount} 位<span className="followSpan">跟隨者</span>
        </div>
      </div>
    </div>
  );
};

export default AdminUserItem;
