import AdminUserList from "components/AdminUserList";
import AdminLeftColumn from "../components/common/AdminLeftColumn";
import "./AdminContentPageFrame.scss";
import { ReactComponent as Home } from "../assets/icons/home.svg";
import { ReactComponent as ProfileSelected } from "../assets/icons/profile_selected.svg";
import { useEffect, useState } from "react";
import { getUsers } from "api/admin";

const AdminUsersPage = () => {
 const [users, setUsers] = useState([]);
 
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
