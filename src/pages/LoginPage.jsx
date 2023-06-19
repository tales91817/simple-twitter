import AuthInput, { AuthContainer } from "../components/common/Auth";
import {
  AuthButton,
  LinkTextContainer,
  AuthLinkText,
  AuthTitle,
} from "../components/common/Auth";
import { ReactComponent as Logo } from "../assets/icons/LOGO.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "contexts/AuthContext";

const LoginPage = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [alertText1, setAlertText1] = useState("");
  const [alertText2, setAlertText2] = useState("");
  const [alertText, setAlertText] = useState("");
  const navigate = useNavigate();

  const { login, isAuthenticated } = useAuth()

  const handleClick = async () => {
    if (account.length === 0) {
      setAlertText1("尚未輸入帳號！");
      Swal.fire({
        position: "top",
        title: "所有欄位皆為必填!",
        timer: 1000,
        icon: "error",
        showConfirmButton: false,
      });
      return;
    } else {
      setAlertText1("");
    }
    if (password.length === 0) {
      setAlertText2("尚未輸入密碼！");
      Swal.fire({
        position: "top",
        title: "所有欄位皆為必填",
        timer: 1000,
        icon: "error",
        showConfirmButton: false,
      });
      return;
    } else {
      setAlertText2("");
    }

    const {
      success,
      message,
      data,

      // status,   ////////// status 改成 success，型別從字串變成布林值 ////////////
      // data: {
      //   token: authToken,
      //   user:
      //    {
      //     id: id,
      //     account: useraccount,
      //     email: email,
      //     name: name,
      //     avatar: avatar,
      //     cover: cover,
      //     introduction: introduction,
      //     role: role,
      //     createdAt: createdAt,
      //     updatedAt: updatedAt
      //   }
      // },
    } = await login({
      account,
      password,
    });

    if (success) {
      console.log("success是" + success);
      const authToken = localStorage.getItem("authToken");

      //////////////////////下面這段寫法要修改//////////////////////////
      // if (status === "success") {
      //   localStorage.setItem("authToken", authToken);
      //   localStorage.setItem("id", id)
      //   localStorage.setItem("useraccount", useraccount)
      //   localStorage.setItem("email", email)
      //   localStorage.setItem("name", name)
      //   localStorage.setItem("avatar", avatar)
      //   localStorage.setItem("cover", cover)
      //   localStorage.setItem("introduction", introduction)
      //   localStorage.setItem("role", role)
      //   console.log("status是" + status);
      //   console.log("token是" + authToken);
      //////////////////////上面這段寫法要修改//////////////////////////

      // 登入成功訊息
      Swal.fire({
        position: "top",
        title: "登入成功！",
        timer: 1000,
        icon: "success",
        showConfirmButton: false,
      });
      return;
    }

    console.log("登入GG");
    if (message === "Error: 帳號不存在!") {
      setAlertText("帳號不存在！");
      setAlertText1("帳號不存在！");
      setAlertText2("");
    } else if (message === "Error: 密碼錯誤!") {
      setAlertText("密碼錯誤！");
      setAlertText2("密碼錯誤！");
      setAlertText1("");
    }

    // 登入失敗訊息
    Swal.fire({
      position: "top",
      title: alertText,
      timer: 1000,
      icon: "error",
      showConfirmButton: false,
    });
  };

   useEffect(() => {
    if(isAuthenticated) {
      navigate('/')
    }
   }, [navigate, isAuthenticated]);

  return (
    <AuthContainer>
      <Logo />
      <AuthTitle>登入 Alphitter</AuthTitle>
      <AuthInput
        label="帳號"
        placeholder="請輸入帳號"
        value={account}
        onChange={(accountInputValue) => setAccount(accountInputValue)}
        alertText={alertText1}
      />
      <AuthInput
        type="password"
        label="密碼"
        placeholder="請輸入密碼"
        value={password}
        onChange={(passwordInputValue) => setPassword(passwordInputValue)}
        alertText={alertText2}
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