import AuthInput, { AuthContainer } from "../components/common/Auth";
import { AuthButton, AuthLinkText, AuthTitle } from "../components/common/Auth";
import { ReactComponent as Logo } from "../assets/icons/LOGO.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const [userAccount, setUserAccount] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const nameInputLength = username.length;

  
  return (
    <AuthContainer>
      <Logo />
      <AuthTitle>建立你的帳號</AuthTitle>
      <AuthInput
        label="帳號"
        placeholder="請輸入帳號"
        alertText="account 已重複註冊！"
        value={userAccount}
        onChange={(accountInputValue) => setUserAccount(accountInputValue)}
      />
      <AuthInput
        label="名稱"
        placeholder="請輸入使用者名稱"
        alertText={nameInputLength > 50 ? "字數超出上限！" : ""}
        wordCount={`${nameInputLength}/50`}
        value={username}
        onChange={(nameInputValue) => setUsername(nameInputValue)}
      />
      <AuthInput
        label="Email"
        placeholder="請輸入 Email"
        alertText="email 已重複註冊！"
        value={email}
        onChange={(emailInputValue) => setEmail(emailInputValue)}
      />

      <AuthInput
        type="password"
        label="密碼"
        placeholder="請設定密碼"
        value={password}
        onChange={(passwordInputValue) => setPassword(passwordInputValue)}
      />
      <AuthInput
        type="password"
        label="密碼確認"
        placeholder="請再次輸入密碼"
        alertText="密碼與確認密碼不相符！"
        value={checkPassword}
        onChange={(checkPasswordInputValue) =>
          setCheckPassword(checkPasswordInputValue)
        }
      />
      <AuthButton>註冊</AuthButton>
      <Link to="/users/login">
        <AuthLinkText>取消</AuthLinkText>
      </Link>
    </AuthContainer>
  );
};

export default LoginPage;
