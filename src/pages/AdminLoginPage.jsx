import AuthInput, { AuthContainer } from "../components/common/Auth";
import {
  AuthButton,
  LinkTextContainer,
  AuthLinkText,
  AuthTitle,
} from "../components/common/Auth";
import { ReactComponent as Logo } from "../assets/icons/LOGO.svg";
import { Link } from "react-router-dom";

const AdminLoginPage = () => {
  return (
    <AuthContainer>
      <Logo />
      <AuthTitle>後台登入</AuthTitle>
      <AuthInput
        label="帳號"
        placeholder="請輸入帳號"
        alertText="字數超過上限！"
        wordCount="10/15"
      />
      <AuthInput type="password" label="密碼" placeholder="請輸入密碼" />
      <AuthButton>登入</AuthButton>
      <LinkTextContainer>
        <Link to="/users/login">
          <AuthLinkText>前台登入</AuthLinkText>
        </Link>
      </LinkTextContainer>
    </AuthContainer>
  );
};

export default AdminLoginPage;
