import AuthInput, { AuthContainer } from "../components/common/Auth";
import {
  AuthButton,
  LinkTextContainer,
  AuthLinkText,
  AuthTitle,
} from "../components/common/Auth";
import { ReactComponent as Logo } from "../assets/icons/LOGO.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "api/auth";
import Swal from "sweetalert2";

const LoginPage = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    if (account.length === 0) {
      return;
    }
    if (password.length === 0) {
      return;
    }

    const {
      status,
      data: { 
        token: authToken,
        user: 
         {
          id: id,
          account: useraccount,
          email: email,
          name: name,
          avatar: avatar,
          cover: cover,
          introduction: introduction,
          role: role,
          createdAt: createdAt,
          updatedAt: updatedAt
        }
      },
    } = await login({
      account,
      password,
    });
    if (status === "success") {
      localStorage.setItem("authToken", authToken);
      localStorage.setItem("id", id)
      localStorage.setItem("useraccount", useraccount)
      localStorage.setItem("email", email)
      localStorage.setItem("name", name)
      localStorage.setItem("avatar", avatar)
      localStorage.setItem("cover", cover)
      localStorage.setItem("introduction", introduction)
      localStorage.setItem("role", role)
      console.log("status是" + status);
      console.log("token是" + authToken);

      // 登入成功訊息
      Swal.fire({
        position: "top",
        title: "登入成功！",
        timer: 1000,
        icon: "success",
        showConfirmButton: false,
      });
      navigate("/");
      return;
    }

    // 登入失敗訊息
    Swal.fire({
      position: "top",
      title: "登入失敗！",
      timer: 1000,
      icon: "error",
      showConfirmButton: false,
    });
  };

  return (
    <AuthContainer>
      <Logo />
      <AuthTitle>登入 Alphitter</AuthTitle>
      <AuthInput
        label="帳號"
        placeholder="請輸入帳號"
        value={account}
        onChange={(accountInputValue) => setAccount(accountInputValue)}
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
      <AuthButton onClick={handleClick}>登入</AuthButton>
      <LinkTextContainer>
        <Link to="/users/signup">
          <AuthLinkText>註冊</AuthLinkText>
        </Link>
        ·
        <Link to="/admin/login">
          <AuthLinkText>登入後台</AuthLinkText>
        </Link>
      </LinkTextContainer>
    </AuthContainer>
  );
};

export default LoginPage;
