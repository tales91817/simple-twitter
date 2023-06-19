import AuthInput, { AuthContainer } from "../components/common/Auth";
import { AuthButton, AuthLinkText, AuthTitle } from "../components/common/Auth";
import { ReactComponent as Logo } from "../assets/icons/LOGO.svg";
import { Link, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "contexts/AuthContext";

const SignUpPage = () => {
  const [account, setAccount] = useState("");
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const [alertText, setAlertText] = useState("");
  const [alertText1, setAlertText1] = useState("");
  const [alertText2, setAlertText2] = useState("");
  const [alertText3, setAlertText3] = useState("");
  const [alertText4, setAlertText4] = useState("");
  const [alertText5, setAlertText5] = useState("");


  const nameInputLength = name.length;

  const navigate = useNavigate();

  const { register, isAuthenticated } = useAuth();

  const handleClick = async () => {
    // if (account.length === 0) {
    //   setAlertText1("尚未輸入帳號！");
    //   Swal.fire({
    //     position: "top",
    //     title: "尚未輸入帳號！",
    //     timer: 1000,
    //     icon: "error",
    //     showConfirmButton: false,
    //   });
    //   return;
    // }
    // if (name.length === 0) {
    //   setAlertText2("尚未輸入名稱！");
    //   Swal.fire({
    //     position: "top",
    //     title: "尚未輸入名稱！",
    //     timer: 1000,
    //     icon: "error",
    //     showConfirmButton: false,
    //   });
    //   return;
    // }
    // if (name.length > 50) {
    //   Swal.fire({
    //     position: "top",
    //     title: "字數超出上限！",
    //     timer: 1000,
    //     icon: "error",
    //     showConfirmButton: false,
    //   });
    //   return;
    // }
    // if (email.length === 0) {
    //   setAlertText3("尚未輸入Email！");
    //   Swal.fire({
    //     position: "top",
    //     title: "尚未輸入Email！！",
    //     timer: 1000,
    //     icon: "error",
    //     showConfirmButton: false,
    //   });
    //   return;
    // }
    // if (password.length === 0) {
    //   setAlertText4("尚未輸入密碼！");
    //   Swal.fire({
    //     position: "top",
    //     title: "尚未輸入密碼！",
    //     timer: 1000,
    //     icon: "error",
    //     showConfirmButton: false,
    //   });
    //   return;
    // } else {
    //   setAlertText4("");
    // }
    // if (checkPassword.length === 0) {
    //   setAlertText5("尚未輸入確認密碼！");
    //   Swal.fire({
    //     position: "top",
    //     title: "尚未輸入確認密碼！",
    //     timer: 1000,
    //     icon: "error",
    //     showConfirmButton: false,
    //   });
    //   return;
    // } else {
    //   setAlertText5("");
    // }


    const { success, message } = await register({
      name,
      account,
      email,
      password,
      checkPassword,
    });

    if (success) {
      // 註冊成功訊息
      Swal.fire({
        position: "top",
        title: "註冊成功！",
        timer: 1000,
        icon: "success",
        showConfirmButton: false,
      });
      navigate("/users/login");
      return;
    }


    
    if (message === "Error: account 已重複註冊！") {
      setAlertText("account 已重複註冊！")
      setAlertText1("account 已重複註冊！");
    } else {
      setAlertText1("");
    }

    console.log("註冊GG");
    if (message === "Error: email 已重複註冊！") {
      setAlertText("email 已重複註冊！");
      setAlertText3("email 已重複註冊！");
    } else {
      setAlertText3("");
    }

    if (message === "Error: 密碼與確認密碼不相符!") {
      setAlertText("密碼與確認密碼不相符！");
      setAlertText5("密碼與確認密碼不相符！");
    } else {
      setAlertText5("");
    }

    /////////////////////////////////////
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
    }
    if (name.length === 0) {
      setAlertText2("尚未輸入名稱！");
      Swal.fire({
        position: "top",
        title: "所有欄位皆為必填",
        timer: 1000,
        icon: "error",
        showConfirmButton: false,
      });
      return;
    }
    if (name.length > 50) {
      Swal.fire({
        position: "top",
        title: "字數超出上限！",
        timer: 1000,
        icon: "error",
        showConfirmButton: false,
      });
      return;
    }
    if (email.length === 0) {
      setAlertText3("尚未輸入Email！");
      Swal.fire({
        position: "top",
        title: "所有欄位皆為必填!",
        timer: 1000,
        icon: "error",
        showConfirmButton: false,
      });
      return;
    }
    if (password.length === 0) {
      setAlertText4("尚未輸入密碼！");
      Swal.fire({
        position: "top",
        title: "所有欄位皆為必填",
        timer: 1000,
        icon: "error",
        showConfirmButton: false,
      });
      return;
    } else {
      setAlertText4("");
    }
    if (checkPassword.length === 0) {
      setAlertText5("尚未輸入確認密碼！");
      Swal.fire({
        position: "top",
        title: "所有欄位皆為必填！",
        timer: 1000,
        icon: "error",
        showConfirmButton: false,
      });
      return;
    } else {
      setAlertText5("");
    }

// "Error: 所有欄位皆為必填!";

// 超過字數不能按送出;

    // 註冊失敗訊息
    Swal.fire({
      position: "top",
      // title: "註冊失敗！",
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
      <AuthTitle>建立你的帳號</AuthTitle>
      <AuthInput
        label="帳號"
        placeholder="請輸入帳號"
        // alertText="account 已重複註冊！"
        alertText={alertText1}
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
        // alertText="email 已重複註冊！"
        alertText={alertText3}
        value={email}
        onChange={(emailInputValue) => setEmail(emailInputValue)}
      />

      <AuthInput
        type="password"
        label="密碼"
        placeholder="請設定密碼"
        alertText={alertText4}
        value={password}
        onChange={(passwordInputValue) => setPassword(passwordInputValue)}
      />
      <AuthInput
        type="password"
        label="密碼確認"
        placeholder="請再次輸入密碼"
        // alertText="密碼與確認密碼不相符！"
        alertText={alertText5}
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

export default SignUpPage;
