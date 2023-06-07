import AuthInput, { AuthContainer } from "../components/common/Auth";
import { AuthButton, AuthLinkText, AuthTitle } from "../components/common/Auth";
import { ReactComponent as Logo } from "../assets/icons/LOGO.svg";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthContainer>
      <Logo />
      <AuthTitle>建立你的帳號</AuthTitle>
      <AuthInput
        label="帳號"
        placeholder="請輸入帳號"
        alertText="字數超過上限！"
        wordCount="10/15"
      />
      <AuthInput
        label="名稱"
        placeholder="請輸入使用者名稱"
        alertText="字數超過上限！"
        wordCount="10/15"
      />
      <AuthInput
        label="Email"
        placeholder="請輸入 Email"
        alertText="字數超過上限！"
        wordCount="10/15"
      />

      <AuthInput type="password" label="密碼" placeholder="請設定密碼" />
      <AuthInput
        type="password"
        label="密碼確認"
        placeholder="請再次輸入密碼"
      />
      <AuthButton>註冊</AuthButton>
      <Link to="/users/login">
        <AuthLinkText>取消</AuthLinkText>
      </Link>
    </AuthContainer>
  );
};

export default LoginPage;
