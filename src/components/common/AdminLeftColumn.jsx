import { ReactComponent as Logo } from "../../assets/icons/LOGO.svg";
// import { ReactComponent as HomeSelected } from "../../assets/icons/home_selected.svg";
// import { ReactComponent as Profile } from "../../assets/icons/profile.svg";
import { ReactComponent as Logout } from "../../assets/icons/Logout.svg";
// import { ReactComponent as ProfileSelected } from "../../assets/icons/profile_selected.svg";
import { Link } from "react-router-dom";

const NavItem = ({ icon, title, onclick }) => {
  return (
    <div 
      className="adminNavItemContainer" 
      // onClick={onclick}
    >
      <div className="adminNavIconContainer">{icon}</div>
      <div className="adminNavTitle">{title}</div>
    </div>
  );
};

const AdminLeftColumn = ({ icon1, icon2 }) => {

  return (
    <div className="adminLeftColumn">
      <div className="adminLeftColumnTop">
        <div className="adminLeftColumnLogoContainer">
          <Logo />
        </div>
        <Link to="/admin/main">
          <NavItem
            icon={icon1}
            title="推文清單"
          ></NavItem>
        </Link>
        <Link to="/admin/users">
          <NavItem
            icon={icon2}
            title="使用者列表"
          ></NavItem>
        </Link>
      </div>
      <NavItem icon={<Logout />} title="登出"></NavItem>
    </div>
  );
};

export default AdminLeftColumn;
