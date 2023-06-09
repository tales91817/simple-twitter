import AdminUserList from "components/AdminUserList";
import AdminLeftColumn from "../components/common/AdminLeftColumn";
import "./AdminContentPageFrame.scss";

const dummyUsers = [
  {
    id: 1,
    name: "John Doe",
    account: "heyjohn",
    avatar: "../assets/icons/other-user-avatar.svg",
    cover: "https://loremflickr.com/640/200/mountain/?lock=30.27625888615926",
    tweetCount: "1.5k",
    likeCount: "20k",
    followingCount: 34,
    followerCount: 59,
  },
  {
    id: 2,
    name: "John Doe",
    account: "heyjohn",
    avatar: "../assets/icons/other-user-avatar.svg",
    cover: "https://loremflickr.com/640/200/mountain/?lock=30.27625888615926",
    tweetCount: "1.5k",
    likeCount: "20k",
    followingCount: 34,
    followerCount: 59,
  },
  {
    id: 3,
    name: "John Doe",
    account: "heyjohn",
    avatar: "../assets/icons/other-user-avatar.svg",
    cover: "https://loremflickr.com/640/200/mountain/?lock=30.27625888615926",
    tweetCount: "1.5k",
    likeCount: "20k",
    followingCount: 34,
    followerCount: 59,
  },
  {
    id: 4,
    name: "John Doe",
    account: "heyjohn",
    avatar: "../assets/icons/other-user-avatar.svg",
    cover: "https://loremflickr.com/640/200/mountain/?lock=30.27625888615926",
    tweetCount: "1.5k",
    likeCount: "20k",
    followingCount: 34,
    followerCount: 59,
  },
  {
    id: 5,
    name: "John Doe",
    account: "heyjohn",
    avatar: "../assets/icons/other-user-avatar.svg",
    cover: "https://loremflickr.com/640/200/mountain/?lock=30.27625888615926",
    tweetCount: "1.5k",
    likeCount: "20k",
    followingCount: 34,
    followerCount: 59,
  },
  {
    id: 6,
    name: "John Doe",
    account: "heyjohn",
    avatar: "../assets/icons/other-user-avatar.svg",
    cover: "https://loremflickr.com/640/200/mountain/?lock=30.27625888615926",
    tweetCount: "1.5k",
    likeCount: "20k",
    followingCount: 34,
    followerCount: 59,
  },
  {
    id: 7,
    name: "John Doe",
    account: "heyjohn",
    avatar: "../assets/icons/other-user-avatar.svg",
    cover: "https://loremflickr.com/640/200/mountain/?lock=30.27625888615926",
    tweetCount: "1.5k",
    likeCount: "20k",
    followingCount: 34,
    followerCount: 59,
  },
  {
    id: 8,
    name: "John Doe",
    account: "heyjohn",
    avatar: "../assets/icons/other-user-avatar.svg",
    cover: "https://loremflickr.com/640/200/mountain/?lock=30.27625888615926",
    tweetCount: "1.5k",
    likeCount: "20k",
    followingCount: 34,
    followerCount: 59,
  },
  {
    id: 9,
    name: "John Doe",
    account: "heyjohn",
    avatar: "../assets/icons/other-user-avatar.svg",
    cover: "https://loremflickr.com/640/200/mountain/?lock=30.27625888615926",
    tweetCount: "1.5k",
    likeCount: "20k",
    followingCount: 34,
    followerCount: 59,
  },
  {
    id: 10,
    name: "John Doe",
    account: "heyjohn",
    avatar: "../assets/icons/other-user-avatar.svg",
    cover: "https://loremflickr.com/640/200/mountain/?lock=30.27625888615926",
    tweetCount: "1.5k",
    likeCount: "20k",
    followingCount: 34,
    followerCount: 59,
  },
];

const AdminUsersPage = () => {
  return (
    <div className="adminContentPageContainer">
      <AdminLeftColumn></AdminLeftColumn>
      <AdminUserList users={dummyUsers} />
    </div>
  );
};

export default AdminUsersPage;
