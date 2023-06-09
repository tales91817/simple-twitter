import { ReactComponent as Logo } from "../../assets/icons/LOGO.svg";
import { ReactComponent as HomeSelected } from "../../assets/icons/home_selected.svg";
import { ReactComponent as Profile } from "../../assets/icons/profile.svg";
import { ReactComponent as Logout } from "../../assets/icons/Logout.svg";

const NavItem = ({ icon, title }) => {
  return (
    <div className="adminNavItemContainer">
      <div className="adminNavIconContainer">{icon}</div>
      <div className="adminNavTitle">{title}</div>
    </div>
  );
};

const AdminLeftColumn = () => {
  return (
    <div className="adminLeftColumn">
      <div className="adminLeftColumnTop">
        <div className="adminLeftColumnLogoContainer">
          <Logo />
        </div>
        <NavItem icon={<HomeSelected />} title="推文清單"></NavItem>
        <NavItem icon={<Profile />} title="使用者列表"></NavItem>
      </div>
      <NavItem icon={<Logout />} title="登出"></NavItem>
    </div>
  );
};

export default AdminLeftColumn;
