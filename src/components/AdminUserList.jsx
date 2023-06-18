import "./AdminUser.scss";
import AdminUserItem from "./AdminUserItem";

const AdminUserCollection = ({ users }) => {
  //依照推文數排序
  const sortedUsers = users.sort((a, b) => b.postNum - a.postNum);
  
  return (
    <div className="adminUserCollection">
      {sortedUsers.map((user) => {
        return <AdminUserItem key={user.id} user={user} />;
      })}
    </div>
  );
};

const AdminUserList = ({ users }) => {
  return (
    <div className="adminUserList">
      <div className="adminTitle">使用者列表</div>
      <AdminUserCollection users={users} />
    </div>
  );
};

export default AdminUserList;
