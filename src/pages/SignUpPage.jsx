import AuthInput, { AuthContainer } from "../components/common/Auth";
import { AuthButton, AuthLinkText, AuthTitle } from "../components/common/Auth";
import { ReactComponent as Logo } from "../assets/icons/LOGO.svg";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import { register } from "api/auth";
import Swal from "sweetalert2";

const LoginPage = () => {
  const [account, setAccount] = useState("");
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const nameInputLength = name.length;

  const navigate = useNavigate();

  const handleClick = async () => {
    if (account.length === 0) {
      return;
    }
    if (name.length === 0) {
      return;
    }
    if (email.length === 0) {
      return;
    }
    if (password.length === 0) {
      return;
    }
    if (checkPassword.length === 0) {
      return;
    }
    const {
      status,
      data: { token: authToken },
    } = await register({ name, account, email, password, checkPassword });

    if (status === "success") {
      localStorage.setItem("authToken", authToken);

      // 註冊成功訊息
      Swal.fire({
        position: "top",
        title: "註冊成功！",
        timer: 1000,
        icon: "success",
        showConfirmButton: false,
      });
      navigate("/");
      return;
    }

    // 註冊失敗訊息
    Swal.fire({
      position: "top",
      title: "註冊失敗！",
      timer: 1000,
      icon: "error",
      showConfirmButton: false,
    });
  };

  return (
    <AuthContainer>
      <Logo />
      <AuthTitle>建立你的帳號</AuthTitle>
      <AuthInput
        label="帳號"
        placeholder="請輸入帳號"
        alertText="account 已重複註冊！"
        value={account}
        onChange={(accountInputValue) => setAccount(accountInputValue)}
      />
      <AuthInput
        label="名稱"
        placeholder="請輸入使用者名稱"
        alertText={nameInputLength > 50 ? "字數超出上限！" : ""}
        wordCount={`${nameInputLength}/50`}
        value={name}
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
      <AuthButton onClick={handleClick}>註冊</AuthButton>
      <Link to="/users/login">
        <AuthLinkText>取消</AuthLinkText>
      </Link>
      
    </AuthContainer>
  );
};

export default LoginPage;
