import AdminUserList from "components/AdminUserList";
import AdminLeftColumn from "../components/common/AdminLeftColumn";
import "./AdminContentPageFrame.scss";
import { ReactComponent as Home } from "../assets/icons/home.svg";
import { ReactComponent as ProfileSelected } from "../assets/icons/profile_selected.svg";
import { useEffect, useState } from "react";
import { getUsers } from "api/admin";
import { useAuth } from "contexts/AuthContext";
import { useNavigate } from "react-router-dom";


const AdminUsersPage = () => {
   const [users, setUsers] = useState([]);
  //   const navigate = useNavigate();
  //  const { isAuthenticated } = useAuth();

  //  useEffect(() => {
  //    if (!isAuthenticated) {
  //      console.log("登愣沒有isAuthenticated了");
  //      navigate("/admin/login");
  //    }
  //  }, [navigate, isAuthenticated]);

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
      <AdminLeftColumn
        icon1={<Home />}
        icon2={<ProfileSelected />}
      />
      <AdminUserList users={users} />
    </div>
  );
};

export default AdminUsersPage;
