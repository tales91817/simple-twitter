import AdminUserList from "components/AdminUserList";
import AdminLeftColumn from "../components/common/AdminLeftColumn";
import "./AdminContentPageFrame.scss";
import { ReactComponent as Home } from "../assets/icons/home.svg";
import { ReactComponent as ProfileSelected } from "../assets/icons/profile_selected.svg";
import { useEffect, useState } from "react";
import { getUsers } from "api/admin";
import { useAuth } from "contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useAuthAdmin } from "contexts/AuthAdminContext";


const AdminUsersPage = () => {
  const [users, setUsers] = useState([]);

  ////////身份驗證與頁面自動導引//////////
  const navigate = useNavigate();
  const { isAdminAuthenticated } = useAuthAdmin();

  useEffect(() => {
    if (!isAdminAuthenticated) {
      console.log("登愣沒有isAdminAuthenticated了");
      navigate("admin/users");
    }
  }, [navigate, isAdminAuthenticated]);

  useEffect(() => {
    const getUsersAsync = async () => {
      try {
        const users = await getUsers();
        setUsers(users);
      } catch (error) {
        console.error(error);
      }
    };
    getUsersAsync();
  }, []);

  return (
    <div className="adminContentPageContainer">
      <AdminLeftColumn icon1={<Home />} icon2={<ProfileSelected />} />
      <AdminUserList users={users} />
    </div>
  );
};

export default AdminUsersPage;
