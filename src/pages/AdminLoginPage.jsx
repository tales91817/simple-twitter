import AuthInput, { AuthContainer } from "../components/common/Auth";
import {
  AuthButton,
  LinkTextContainer,
  AuthLinkText,
  AuthTitle,
} from "../components/common/Auth";
import { ReactComponent as Logo } from "../assets/icons/LOGO.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const AdminLoginPage = () => {
  const [userAccount, setUserAccount] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthContainer>
      <Logo />
      <AuthTitle>後台登入</AuthTitle>
      <AuthInput
        label="帳號"
        placeholder="請輸入帳號"
        value={userAccount}
        onChange={(accountInputValue) => setUserAccount(accountInputValue)}
        alertText="帳號不存在！"
      />
      <AuthInput
        type="password"
        label="密碼"
        placeholder="請輸入密碼"
        value={password}
        onChange={(passwordInputValue) => setPassword(passwordInputValue)}
        alertText="密碼錯誤！"
      />
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
