import { ReactComponent as Logo } from "../../assets/icons/LOGO.svg";
import { ReactComponent as Logout } from "../../assets/icons/Logout.svg";
import { Link, useNavigate } from "react-router-dom";

const NavItem = ({ icon, title, onClick }) => {
  return (
    <div onClick={onClick} className="adminNavItemContainer">
      <div className="adminNavIconContainer">{icon}</div>
      <div className="adminNavTitle">{title}</div>
    </div>
  );
};

const AdminLeftColumn = ({ icon1, icon2 }) => {
    const navigate = useNavigate();

    const handleClick = () => {
      localStorage.removeItem("authToken");
      navigate("/admin/login");
    };

  return (
    <div className="adminLeftColumn">
      <div className="adminLeftColumnTop">
        <div className="adminLeftColumnLogoContainer">
          <Logo />
        </div>
        <Link className="navLink" to="/admin/main">
          <NavItem icon={icon1} title="推文清單" />
        </Link>
        <Link className="navLink" to="/admin/users">
          <NavItem icon={icon2} title="使用者列表" />
        </Link>
      </div>
      <NavItem onClick={handleClick} icon={<Logout />} title="登出"></NavItem>
    </div>
  );
};

export default AdminLeftColumn;
