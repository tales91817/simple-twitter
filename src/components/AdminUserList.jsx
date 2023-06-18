import "./AdminUser.scss";
import AdminUserItem from "./AdminUserItem";

const AdminUserCollection = ({ users }) => {
  return (
    <div className="adminUserCollection">
      {users.map((user) => {
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
